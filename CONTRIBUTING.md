# Contributing to Security Awareness Course

Thank you for contributing to open source security education! This course serves the lifelong learning community with peer-reviewed research and practical security guidance.

## How to Contribute

### 1. Research Contributions

**Requirements**:
- Peer-reviewed sources (academic journals, conferences)
- DOI or arXiv links for verification
- Publication year 2019 or later
- Authoritative sources (IEEE, ACM, NIST, OWASP, CISA)

**Example**:
```markdown
**Source**: Chesney & Citron (2019) - "Deep Fakes: A Looming Challenge"
- Published in: California Law Review, Vol. 107
- DOI: 10.15779/Z38RV0D15J
- Key Finding: 96% of deepfakes are non-consensual intimate content
```

### 2. Code Examples

**Standards**:
- Minimal, focused implementations
- Security-first design
- Include comments explaining security considerations
- Test all code before submitting

**Languages**: Python, Swift, JavaScript, Rust

### 3. Detection Techniques

**Format**:
```markdown
## [Technique Name]

**Effectiveness**: [Accuracy %]
**Performance**: [Processing time]
**Use Case**: [When to apply]

### Implementation
[Code example]

### Limitations
[Known weaknesses]
```

### 4. Case Studies

**Structure**:
- Incident date and location
- Attack vector
- Impact (financial, reputational)
- Detection method
- Lessons learned
- Prevention recommendations

## Submission Process

### Step 1: Fork & Clone
```bash
gh repo fork durellwilson/security-awareness-course --clone
cd security-awareness-course
```

### Step 2: Create Branch
```bash
git checkout -b feature/your-contribution
```

### Step 3: Make Changes
- Add content to `book/src/`
- Update `book/src/SUMMARY.md` if adding new chapters
- Test locally: `cd book && mdbook serve`

### Step 4: Verify Quality
```bash
# Test build
cd book && mdbook test

# Check links
mdbook build
```

### Step 5: Submit PR
```bash
git add -A
git commit -m "feat: [description]"
git push origin feature/your-contribution
gh pr create --title "feat: [description]" --body "## Changes\n- [list changes]\n\n## Research Sources\n- [citations]"
```

## Content Guidelines

### Research Quality
- ✅ Peer-reviewed academic papers
- ✅ Government standards (NIST, CISA)
- ✅ Industry frameworks (OWASP, MITRE)
- ✅ Reputable security vendors (Microsoft, Google, IBM)
- ❌ Blog posts without citations
- ❌ Unverified statistics
- ❌ Marketing materials

### Code Quality
- ✅ Security-focused
- ✅ Minimal and clear
- ✅ Well-commented
- ✅ Production-ready patterns
- ❌ Vulnerable code examples
- ❌ Overly complex implementations
- ❌ Deprecated libraries

### Writing Style
- Clear and concise
- Technical but accessible
- Action-oriented
- Include practical examples
- Avoid jargon without explanation

## Review Process

1. **Automated Checks** (CI/CD)
   - Markdown linting
   - Spell checking
   - Security scanning
   - Build verification

2. **Maintainer Review**
   - Research verification
   - Technical accuracy
   - Code security review
   - Documentation quality

3. **Community Feedback**
   - Open for 48 hours minimum
   - Address reviewer comments
   - Iterate as needed

## Recognition

Contributors are recognized in:
- GitHub contributors page
- Course acknowledgments section
- Community showcase

## Code of Conduct

### Our Standards
- Respectful collaboration
- Constructive feedback
- Focus on education
- Security-first mindset
- Inclusive language

### Unacceptable
- Harassment or discrimination
- Malicious code
- Misinformation
- Spam or self-promotion
- Disclosure of vulnerabilities without responsible disclosure

## Questions?

- Open an issue: `gh issue create`
- Discussion forum: GitHub Discussions
- Security concerns: See SECURITY.md

---

**Together we build a more secure digital future through education.**
