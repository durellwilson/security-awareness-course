# Prevention & Mitigation

## Input Sanitization

```swift
func sanitizeInput(_ input: String) -> String {
    var cleaned = input
    let patterns = [
        "ignore previous",
        "system prompt",
        "admin mode"
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

## Best Practices

1. ✅ **Never trust user input**
2. ✅ **Validate and sanitize all inputs**
3. ✅ **Isolate system prompts from user context**
4. ✅ **Monitor for suspicious patterns**
5. ✅ **Implement rate limiting**
6. ✅ **Log security events**

---

**Next**: [Incident Response →](./incident-response.md)
