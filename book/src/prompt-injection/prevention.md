# Prevention Methods

## NIST-Recommended Strategies

### For Direct Injection
- Train models to identify adversarial prompts
- Curate training datasets carefully
- Implement robust content filtering
- Use reinforcement learning from human feedback (RLHF)

### For Indirect Injection
- Filter instructions from retrieved inputs
- Implement LLM moderators for anomaly detection
- Use interpretability-based solutions
- Validate external data sources before processing

**Source**: [NIST AI Risk Management Framework][1]

## Input Sanitization

```swift
func sanitizeInput(_ input: String) -> String {
    var cleaned = input
    let patterns = [
        "ignore previous",
        "system prompt",
        "admin mode",
        "debug mode",
        "override",
        "jailbreak"
    ]
    
    for pattern in patterns {
        cleaned = cleaned.replacingOccurrences(
            of: pattern,
            with: "",
            options: .caseInsensitive
        )
    }
    
    return cleaned
}
```

## Context Isolation

Separate system prompts from user input to prevent exposure.

```swift
actor SecureContext {
    private let systemPrompt: String
    
    init() {
        self.systemPrompt = loadSystemPrompt()
    }
    
    func process(_ userInput: String) async -> String {
        // System prompt never exposed to user input
        let sanitized = sanitizeInput(userInput)
        return await generateResponse(sanitized)
    }
}
```

## Rate Limiting

Prevent brute-force attacks and resource exhaustion.

```swift
actor RateLimiter {
    private var requests: [String: [Date]] = [:]
    
    func checkLimit(for userId: String) async -> Bool {
        let now = Date()
        var userRequests = requests[userId] ?? []
        userRequests = userRequests.filter { 
            now.timeIntervalSince($0) < 60 
        }
        
        guard userRequests.count < 10 else { 
            return false 
        }
        
        userRequests.append(now)
        requests[userId] = userRequests
        return true
    }
}
```

## Output Filtering

Validate and filter LLM responses before returning to users.

```swift
func filterOutput(_ response: String) -> String {
    let sensitivePatterns = [
        "system prompt",
        "api key",
        "password",
        "secret"
    ]
    
    var filtered = response
    for pattern in sensitivePatterns {
        if filtered.lowercased().contains(pattern) {
            return "[FILTERED: Sensitive information detected]"
        }
    }
    
    return filtered
}
```

## Monitoring & Logging

```swift
actor SecurityMonitor {
    func logInteraction(userId: String, input: String, output: String) {
        let event = SecurityEvent(
            timestamp: Date(),
            userId: userId,
            inputLength: input.count,
            suspiciousPatterns: detectPatterns(input),
            outputLength: output.count
        )
        
        if event.suspiciousPatterns.count > 0 {
            alertSecurityTeam(event)
        }
    }
}
```

## Best Practices Checklist

- ✅ Never trust user input
- ✅ Validate and sanitize all inputs
- ✅ Isolate system prompts from user context
- ✅ Monitor for suspicious patterns
- ✅ Implement rate limiting
- ✅ Log security events
- ✅ Use RLHF for model alignment
- ✅ Filter instructions from external sources
- ✅ Implement LLM moderators
- ✅ Regular security audits

## OWASP LLM01 Mitigation

The OWASP Top 10 for LLM Applications recommends:

1. Implement strict input validation
2. Use parameterized queries where applicable
3. Separate user input from system instructions
4. Monitor for injection attempts
5. Implement defense-in-depth strategies

**Source**: [OWASP Top 10 for LLM Applications v1.1][2]

---

[1]: https://www.nist.gov/itl/ai-risk-management-framework
[2]: https://owasp.org/www-project-top-10-for-large-language-model-applications/

**Next**: [Incident Response →](./incident-response.md)
