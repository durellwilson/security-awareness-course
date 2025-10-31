# Industry Standards

## NIST AI Risk Management Framework

**NIST AI 100-1 (2023)**

### Core Functions

1. **GOVERN** - Establish AI governance
2. **MAP** - Identify and assess risks
3. **MEASURE** - Analyze and track risks
4. **MANAGE** - Prioritize and respond

### Risk Categories

**Security Risks**:
- Adversarial attacks (prompt injection)
- Data poisoning
- Model theft
- Privacy violations

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

**Reference**: https://www.nist.gov/itl/ai-risk-management-framework

## OWASP Top 10 for LLM Applications

**Version 1.1 (2024)**

### LLM01: Prompt Injection (HIGHEST RISK)

**Description**: Manipulating LLM via crafted inputs

**Prevention**:
- Privilege control
- Human-in-the-loop
- Segregate external content
- Trust boundaries

### LLM02: Insecure Output Handling

**Description**: Insufficient validation of LLM outputs

**Prevention**:
- Encode outputs
- Input validation
- Content filtering

### LLM03: Training Data Poisoning

**Description**: Manipulating training data

**Prevention**:
- Data provenance
- Anomaly detection
- Sandboxing

**Full List**: https://owasp.org/www-project-top-10-for-large-language-model-applications/

## ISO/IEC Standards

### ISO/IEC 42001:2023 - AI Management System

**Scope**: Requirements for establishing, implementing, maintaining AI management systems

**Key Controls**:
- Risk assessment (Clause 6.1)
- Data governance (Clause 7.4)
- AI system lifecycle (Clause 8)
- Performance monitoring (Clause 9)

**Certification**: Organizations can be ISO 42001 certified

### ISO/IEC 23894:2023 - AI Risk Management

**Framework**:
- Risk identification
- Risk analysis
- Risk evaluation
- Risk treatment

## IEEE Standards

### IEEE 2941-2023 - AI Model Governance

**Coverage**:
- Model development lifecycle
- Testing and validation
- Deployment controls
- Monitoring requirements

### IEEE 7000-2021 - Systems Design for Ethical Concerns

**Process**:
1. Identify stakeholders
2. Elicit ethical values
3. Translate to requirements
4. Verify implementation

## C2PA (Content Authenticity)

**Coalition for Content Provenance and Authenticity**

**Members**: Adobe, Microsoft, BBC, Intel, Sony, Nikon, Canon

**Standard**: C2PA v1.3 (2024)

**Features**:
- Cryptographic content binding
- Tamper-evident manifests
- Edit history tracking
- Creator attribution

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
                        softwareAgent: 'MyApp/1.0'
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

## MITRE ATT&CK for AI

**Framework**: ATLAS (Adversarial Threat Landscape for AI Systems)

**Tactics**:
1. Reconnaissance
2. Resource Development
3. Initial Access
4. ML Attack Staging
5. Exfiltration
6. Impact

**Techniques**:
- **AML.T0051**: Prompt Injection
- **AML.T0043**: Model Poisoning
- **AML.T0024**: Backdoor Attack

**Reference**: https://atlas.mitre.org/

## Industry Certifications

### SOC 2 Type II (AI Systems)

**Trust Service Criteria**:
- Security
- Availability
- Processing Integrity
- Confidentiality
- Privacy

**AI-Specific Controls**:
- Model versioning
- Training data governance
- Bias testing
- Adversarial testing

### ISO 27001 + AI Extension

**Annex A Controls** (relevant to AI):
- A.8.24: Use of cryptography
- A.12.6: Technical vulnerability management
- A.14.2: Security in development
- A.18.1: Compliance with legal requirements

## Research Citations

1. **NIST AI 100-1 (2023)** - AI Risk Management Framework
2. **OWASP (2024)** - Top 10 for LLM Applications v1.1
3. **ISO/IEC 42001:2023** - AI Management System
4. **IEEE 2941-2023** - AI Model Governance
5. **C2PA v1.3 (2024)** - Content Authenticity Standard
6. **MITRE ATLAS** - https://atlas.mitre.org/

---

**Next**: [Threat Intelligence →](./threat-intelligence.md)
