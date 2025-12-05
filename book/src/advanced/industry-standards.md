# Industry Standards

## NIST AI Risk Management Framework

**NIST AI 100-1 (2023)**

### Core Functions

1. **GOVERN** - Establish AI governance and oversight
2. **MAP** - Identify and assess AI risks
3. **MEASURE** - Analyze and track AI risks
4. **MANAGE** - Prioritize and respond to risks

### Risk Categories

**Security Risks**:
- Adversarial attacks (prompt injection, data poisoning)
- Model theft and unauthorized access
- Privacy violations and data leakage
- Supply chain vulnerabilities

**Implementation**:
```python
class NISTCompliance:
    def assess_risk(self, ai_system):
        """
        NIST AI RMF risk assessment
        """
        risks = {
            'security': self.assess_security(ai_system),
            'privacy': self.assess_privacy(ai_system),
            'fairness': self.assess_fairness(ai_system),
            'transparency': self.assess_transparency(ai_system)
        }
        
        return {
            'overall_risk': max(risks.values()),
            'categories': risks,
            'recommendations': self.generate_recommendations(risks)
        }
```

**Reference**: [NIST AI Risk Management Framework][1]

## OWASP Top 10 for LLM Applications

**Version 1.1 (2024)**

### LLM01: Prompt Injection (HIGHEST RISK)

**Description**: Manipulating LLM behavior via crafted inputs

**Attack Types**:
- Direct prompt injection (user-controlled)
- Indirect prompt injection (data poisoning)
- Encoding-based attacks

**Prevention**:
- Privilege control and least privilege
- Human-in-the-loop for critical operations
- Segregate external content from system prompts
- Establish clear trust boundaries
- Input validation and sanitization

### LLM02: Insecure Output Handling

**Description**: Insufficient validation of LLM outputs

**Prevention**:
- Encode outputs appropriately
- Validate output format and content
- Implement content filtering
- Monitor for sensitive information disclosure

### LLM03: Training Data Poisoning

**Description**: Manipulating training data to compromise model behavior

**Prevention**:
- Verify data provenance
- Implement anomaly detection
- Use sandboxed environments
- Regular model validation

### LLM04: Model Denial of Service

**Description**: Overloading LLMs with resource-heavy operations

**Prevention**:
- Rate limiting
- Resource quotas
- Input length restrictions
- Monitoring and alerting

### LLM05: Supply Chain Vulnerabilities

**Description**: Compromised components, services, or datasets

**Prevention**:
- Vendor assessment
- Dependency scanning
- Secure software development practices
- Regular security audits

**Full List**: [OWASP Top 10 for LLM Applications][2]

## ISO/IEC Standards

### ISO/IEC 42001:2023 - AI Management System

**Scope**: Requirements for establishing, implementing, maintaining AI management systems

**Key Controls**:
- Risk assessment and management (Clause 6.1)
- Data governance and quality (Clause 7.4)
- AI system lifecycle management (Clause 8)
- Performance monitoring and evaluation (Clause 9)
- Incident management (Clause 8.5)

**Certification**: Organizations can achieve ISO 42001 certification

### ISO/IEC 23894:2023 - AI Risk Management

**Framework**:
- Risk identification
- Risk analysis
- Risk evaluation
- Risk treatment and monitoring

**Applicable To**:
- AI system developers
- AI system deployers
- AI system operators

## IEEE Standards

### IEEE 2941-2023 - AI Model Governance

**Coverage**:
- Model development lifecycle
- Testing and validation procedures
- Deployment controls
- Monitoring and maintenance requirements
- Incident response

### IEEE 7000-2021 - Systems Design for Ethical Concerns

**Process**:
1. Identify stakeholders and their concerns
2. Elicit ethical values and requirements
3. Translate values to technical requirements
4. Verify implementation against requirements
5. Monitor and maintain ethical alignment

## C2PA (Content Authenticity)

**Coalition for Content Provenance and Authenticity**

**Members**: Adobe, Microsoft, BBC, Intel, Sony, Nikon, Canon, Leica

**Standard**: C2PA v1.3 (2024)

**Features**:
- Cryptographic content binding
- Tamper-evident manifests
- Edit history tracking
- Creator attribution and provenance
- Claim verification

**Implementation**:
```javascript
// Using C2PA JavaScript SDK
import { createC2pa } from 'c2pa';

async function signContent(imageBuffer, metadata) {
    const c2pa = createC2pa();
    
    const manifest = {
        claim_generator: 'MyApp/1.0',
        assertions: [
            {
                label: 'c2pa.actions',
                data: {
                    actions: [{
                        action: 'c2pa.created',
                        when: new Date().toISOString(),
                        softwareAgent: 'MyApp/1.0',
                        parameters: {
                            description: 'Original content creation'
                        }
                    }]
                }
            }
        ]
    };
    
    return await c2pa.sign(imageBuffer, manifest);
}
```

**Adoption**: 
- Adobe Creative Cloud (2021+)
- Nikon Z9 (2022+)
- Canon EOS R3 (2023+)
- Leica M11-P (2023+)
- Microsoft Edge (2024+)

## MITRE ATT&CK for AI

**Framework**: ATLAS (Adversarial Threat Landscape for AI Systems)

**Tactics**:
1. Reconnaissance - Gather information about AI systems
2. Resource Development - Prepare attack infrastructure
3. Initial Access - Gain entry to AI systems
4. ML Attack Staging - Prepare for ML-specific attacks
5. Exfiltration - Extract data from AI systems
6. Impact - Disrupt or degrade AI systems

**Techniques**:
- **AML.T0051**: Prompt Injection
- **AML.T0043**: Model Poisoning
- **AML.T0024**: Backdoor Attack
- **AML.T0002**: Data Poisoning
- **AML.T0015**: Model Extraction

**Reference**: [MITRE ATLAS][3]

## Industry Certifications

### SOC 2 Type II (AI Systems)

**Trust Service Criteria**:
- Security - Protection against unauthorized access
- Availability - System availability and performance
- Processing Integrity - Accurate and complete processing
- Confidentiality - Protection of confidential information
- Privacy - Collection and use of personal information

**AI-Specific Controls**:
- Model versioning and rollback
- Training data governance
- Bias testing and monitoring
- Adversarial testing
- Model performance tracking

### ISO 27001 + AI Extension

**Annex A Controls** (relevant to AI):
- A.8.24: Use of cryptography for data protection
- A.12.6: Technical vulnerability management
- A.14.2: Security in development and support
- A.18.1: Compliance with legal requirements

## Compliance Mapping

| Standard | Deepfakes | Prompt Injection | Governance |
|----------|-----------|------------------|------------|
| NIST AI RMF | ✅ MAP, MEASURE | ✅ GOVERN, MANAGE | ✅ Core |
| OWASP LLM | ⚠️ Indirect | ✅ LLM01 (Highest) | ✅ All |
| ISO 42001 | ✅ Risk Management | ✅ Risk Management | ✅ Core |
| IEEE 2941 | ✅ Lifecycle | ✅ Lifecycle | ✅ Core |
| C2PA | ✅ Authenticity | ⚠️ Partial | ⚠️ Limited |

## Research Citations

1. **NIST AI 100-1 (2023)** - AI Risk Management Framework
2. **OWASP (2024)** - Top 10 for LLM Applications v1.1
3. **ISO/IEC 42001:2023** - AI Management System
4. **ISO/IEC 23894:2023** - AI Risk Management
5. **IEEE 2941-2023** - AI Model Governance
6. **IEEE 7000-2021** - Ethical Systems Design
7. **C2PA v1.3 (2024)** - Content Authenticity Standard
8. **MITRE ATLAS** - Adversarial Threat Landscape

---

[1]: https://www.nist.gov/itl/ai-risk-management-framework
[2]: https://owasp.org/www-project-top-10-for-large-language-model-applications/
[3]: https://atlas.mitre.org/

**Next**: [Threat Intelligence →](./threat-intelligence.md)
