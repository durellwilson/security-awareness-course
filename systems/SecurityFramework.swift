import Foundation

actor SecurityFramework {
    private let threatDetector: ThreatDetector
    private let rateLimiter: RateLimiter
    
    init() {
        self.threatDetector = ThreatDetector()
        self.rateLimiter = RateLimiter()
    }
    
    func processInput(_ input: String, userId: String) async throws -> String {
        let sanitized = sanitize(input)
        let threatScore = await threatDetector.analyze(sanitized)
        
        guard threatScore < 0.7 else {
            throw SecurityError.threatDetected
        }
        
        guard await rateLimiter.checkLimit(userId) else {
            throw SecurityError.rateLimitExceeded
        }
        
        return filterOutput(sanitized)
    }
    
    private func sanitize(_ input: String) -> String {
        var cleaned = input
        let patterns = ["ignore previous", "system prompt", "admin mode"]
        for pattern in patterns {
            cleaned = cleaned.replacingOccurrences(of: pattern, with: "", options: .caseInsensitive)
        }
        return cleaned
    }
    
    private func filterOutput(_ output: String) -> String {
        output
            .replacingOccurrences(of: #"\b\d{3}-\d{2}-\d{4}\b"#, with: "[SSN]", options: .regularExpression)
            .replacingOccurrences(of: #"\b[\w\.-]+@[\w\.-]+\.\w+\b"#, with: "[EMAIL]", options: .regularExpression)
    }
}

actor ThreatDetector {
    func analyze(_ input: String) async -> Double {
        let dangerous = ["ignore", "reveal", "bypass", "admin", "system"]
        let text = input.lowercased()
        let matches = dangerous.filter { text.contains($0) }
        return Double(matches.count) / Double(dangerous.count)
    }
}

actor RateLimiter {
    private var requests: [String: [Date]] = [:]
    
    func checkLimit(_ userId: String) async -> Bool {
        let now = Date()
        var userRequests = requests[userId] ?? []
        userRequests = userRequests.filter { now.timeIntervalSince($0) < 60 }
        guard userRequests.count < 10 else { return false }
        userRequests.append(now)
        requests[userId] = userRequests
        return true
    }
}

enum SecurityError: Error {
    case threatDetected
    case rateLimitExceeded
}
