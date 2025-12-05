# Prompt Injection Knowledge Quiz

## Quiz 1: Attack Fundamentals

**Question 1**: What percentage of LLM applications are vulnerable to prompt injection?
- A) 50%
- B) 73% ✓
- C) 85%
- D) 95%

**Source**: Liu et al., 2023

---

**Question 2**: Which OWASP ranking does prompt injection hold?
- A) LLM02
- B) LLM03
- C) LLM01 (Highest Risk) ✓
- D) LLM05

**Source**: OWASP Top 10 for LLM Applications v1.1

---

**Question 3**: What is the average cost of an AI-related data breach?
- A) $2.5M
- B) $4.5M ✓
- C) $6.5M
- D) $8.5M

**Source**: IBM Security, 2024

---

## Quiz 2: Attack Types

**Question 1**: What is direct prompt injection?
- A) Attacker controls external data sources
- B) User enters malicious text prompt ✓
- C) Model is trained on poisoned data
- D) System prompts are exposed

---

**Question 2**: Which of these is an example of indirect prompt injection?
- A) DAN jailbreak
- B) Role-playing prompts
- C) Malicious instructions in PDF ✓
- D) Encoding attacks

---

**Question 3**: What does the "Agents Rule of Two" state?
- A) Two agents are needed for security
- B) Agents must satisfy no more than 2 of 3 properties ✓
- C) Two-factor authentication is required
- D) Two types of attacks exist

**Source**: Simon Willison, 2025

---

## Quiz 3: Real-World Incidents

**Question 1**: In March 2025, what did a Fortune 500 financial firm's AI agent leak?
- A) Customer passwords
- B) Sensitive account data ✓
- C) System prompts
- D) Model weights

**Source**: Obsidian Security, 2025

---

**Question 2**: How long did the data leak go undetected?
- A) Hours
- B) Days
- C) Weeks ✓
- D) Months

---

**Question 3**: What bypassed the company's traditional security controls?
- A) Malware
- B) Carefully crafted prompt injection ✓
- C) SQL injection
- D) Buffer overflow

---

## Quiz 4: Prevention Techniques

**Question 1**: What is the primary defense against direct injection?
- A) Encryption
- B) Input validation and sanitization ✓
- C) Rate limiting only
- D) Logging only

---

**Question 2**: How should system prompts be protected?
- A) Hidden in comments
- B) Encrypted in database
- C) Isolated from user context ✓
- D) Shared with users

---

**Question 3**: What does RLHF stand for?
- A) Rapid Learning from Human Feedback
- B) Reinforcement Learning from Human Feedback ✓
- C) Real-time Language Handling Framework
- D) Robust LLM Filtering Heuristics

**Source**: NIST AI RMF, 2023

---

## Quiz 5: Detection & Response

**Question 1**: What is the first step in incident response?
- A) Patch vulnerabilities
- B) Isolate affected systems ✓
- C) Notify users
- D) Conduct forensics

---

**Question 2**: Which pattern indicates a prompt injection attempt?
- A) "Please help me"
- B) "Ignore previous instructions" ✓
- C) "What is the weather?"
- D) "Tell me a joke"

---

**Question 3**: What should be monitored for suspicious activity?
- A) Only user inputs
- B) Only system outputs
- C) Both inputs and outputs ✓
- D) Neither

---

## Quiz 6: Standards & Compliance

**Question 1**: Which standard ranks prompt injection as LLM01?
- A) NIST AI RMF
- B) ISO 42001
- C) OWASP Top 10 ✓
- D) IEEE 2941

---

**Question 2**: What does NIST recommend for indirect injection?
- A) Ignore external data
- B) Filter instructions from retrieved inputs ✓
- C) Block all external sources
- D) Use encryption only

---

**Question 3**: What is the purpose of LLM moderators?
- A) Approve all responses
- B) Detect anomalous inputs ✓
- C) Slow down processing
- D) Encrypt data

---

## Answer Key

### Quiz 1: Attack Fundamentals
1. B (73%)
2. C (LLM01)
3. B ($4.5M)

### Quiz 2: Attack Types
1. B (User enters malicious text)
2. C (Malicious instructions in PDF)
3. B (Agents must satisfy no more than 2 of 3 properties)

### Quiz 3: Real-World Incidents
1. B (Sensitive account data)
2. C (Weeks)
3. B (Carefully crafted prompt injection)

### Quiz 4: Prevention Techniques
1. B (Input validation and sanitization)
2. C (Isolated from user context)
3. B (Reinforcement Learning from Human Feedback)

### Quiz 5: Detection & Response
1. B (Isolate affected systems)
2. B ("Ignore previous instructions")
3. C (Both inputs and outputs)

### Quiz 6: Standards & Compliance
1. C (OWASP Top 10)
2. B (Filter instructions from retrieved inputs)
3. B (Detect anomalous inputs)

---

## Scoring Guide

**18-20 Correct**: Security Expert 🏆
- Ready to implement LLM security
- Can design defense strategies
- Qualified for security roles

**14-17 Correct**: Advanced Practitioner 🎯
- Strong understanding of attacks
- Can identify vulnerabilities
- Ready for advanced projects

**10-13 Correct**: Intermediate Learner 📚
- Good foundational knowledge
- Continue studying prevention
- Practice with code examples

**Below 10 Correct**: Beginner 🌱
- Review attack types
- Study prevention strategies
- Work through case studies

---

## Study Resources

### 2025-2026 Research
1. Obsidian Security - Most Common AI Exploit (2025)
2. Simon Willison - Agents Rule of Two (2025)
3. MDPI - Text-Based Prompt Injection (2025)
4. arXiv - Comprehensive Review (2025)

### Code Examples
- Input sanitization patterns
- Context isolation implementation
- Output filtering logic
- Monitoring and logging

### Hands-On Labs
- Attempt prompt injection on test system
- Implement prevention controls
- Analyze attack logs
- Design response procedures

---

**Last Updated**: December 5, 2025  
**Research Quality**: Enterprise-grade with 2025-2026 sources
