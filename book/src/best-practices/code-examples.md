# Code Examples

## Swift Security Patterns

### Input Sanitization
```swift
func sanitizeInput(_ input: String) -> String {
    input
        .replacingOccurrences(of: "ignore", with: "")
        .replacingOccurrences(of: "system", with: "")
        .trimmingCharacters(in: .whitespacesAndNewlines)
}
```

### PII Protection
```swift
struct PrivacyFilter {
    static func removePII(_ text: String) -> String {
        text
            .replacingOccurrences(
                of: #"\b\d{3}-\d{2}-\d{4}\b"#,
                with: "[SSN]",
                options: .regularExpression
            )
    }
}
```

### Rate Limiting
```swift
actor RateLimiter {
    private var requests: [String: [Date]] = [:]
    
    func checkLimit(for userId: String) async -> Bool {
        let now = Date()
        var userRequests = requests[userId] ?? []
        userRequests = userRequests.filter { 
            now.timeIntervalSince($0) < 60 
        }
        guard userRequests.count < 10 else { return false }
        userRequests.append(now)
        requests[userId] = userRequests
        return true
    }
}
```
