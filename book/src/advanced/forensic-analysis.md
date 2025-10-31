# Forensic Analysis

## Digital Forensics for Deepfakes

### Metadata Examination

**Standard**: EXIF (Exchangeable Image File Format)

```bash
# Extract comprehensive metadata
exiftool -a -G1 suspicious_video.mp4

# Key indicators:
# - Software: Check for deepfake tools
# - CreateDate vs ModifyDate: Large gaps suspicious
# - GPS: Location consistency
# - Camera Model: Matches claimed source?
```

**Research**: Verdoliva, L. (2020) - "Media Forensics and DeepFakes: An Overview"
*IEEE Journal of Selected Topics in Signal Processing*, 14(5), 910-932
DOI: 10.1109/JSTSP.2020.3002101

### File System Analysis

```python
import os
import hashlib
from datetime import datetime

class ForensicAnalyzer:
    def analyze_file(self, filepath):
        """
        Comprehensive file analysis
        """
        stat = os.stat(filepath)
        
        return {
            'size': stat.st_size,
            'created': datetime.fromtimestamp(stat.st_ctime),
            'modified': datetime.fromtimestamp(stat.st_mtime),
            'accessed': datetime.fromtimestamp(stat.st_atime),
            'md5': self.calculate_hash(filepath, 'md5'),
            'sha256': self.calculate_hash(filepath, 'sha256')
        }
    
    def calculate_hash(self, filepath, algorithm='sha256'):
        h = hashlib.new(algorithm)
        with open(filepath, 'rb') as f:
            for chunk in iter(lambda: f.read(4096), b""):
                h.update(chunk)
        return h.hexdigest()
```

## Chain of Custody

### Evidence Preservation

**Standard**: ISO/IEC 27037:2012 - Digital Evidence Guidelines

```python
class ChainOfCustody:
    def __init__(self):
        self.log = []
    
    def acquire_evidence(self, source, investigator):
        """
        Document evidence acquisition
        """
        entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'action': 'ACQUIRED',
            'source': source,
            'investigator': investigator,
            'hash': self.calculate_hash(source),
            'location': os.path.abspath(source)
        }
        self.log.append(entry)
        return entry
    
    def transfer_custody(self, from_person, to_person, reason):
        """
        Document custody transfer
        """
        entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'action': 'TRANSFERRED',
            'from': from_person,
            'to': to_person,
            'reason': reason
        }
        self.log.append(entry)
```

## Frame-Level Analysis

### Compression Artifacts

**Research**: Matern et al. (2019) - "Exploiting Visual Artifacts to Expose Deepfakes"

```python
import cv2
import numpy as np

def analyze_compression_artifacts(video_path):
    """
    Deepfakes often show inconsistent compression
    """
    cap = cv2.VideoCapture(video_path)
    artifact_scores = []
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        # Convert to frequency domain
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        dct = cv2.dct(np.float32(gray))
        
        # Analyze high-frequency components
        high_freq = dct[32:, 32:]
        artifact_score = np.mean(np.abs(high_freq))
        artifact_scores.append(artifact_score)
    
    # Inconsistent scores indicate manipulation
    return np.std(artifact_scores)
```

## Legal Admissibility

### Daubert Standard (US Courts)

**Criteria for Expert Testimony**:
1. **Testability**: Can the method be tested?
2. **Peer Review**: Published in journals?
3. **Error Rate**: Known accuracy?
4. **Standards**: Accepted in scientific community?
5. **General Acceptance**: Widely used?

**Case Law**: Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993)

### Documentation Requirements

```markdown
## Forensic Report Template

### Case Information
- Case Number: [ID]
- Date: [YYYY-MM-DD]
- Investigator: [Name, Credentials]

### Evidence Description
- File: [filename]
- Hash (SHA-256): [hash]
- Size: [bytes]
- Source: [origin]

### Analysis Methods
1. Method: [Name]
   - Tool: [Software version]
   - Standard: [ISO/IEEE reference]
   - Result: [Finding]

### Findings
- Conclusion: [AUTHENTIC / MANIPULATED / INCONCLUSIVE]
- Confidence: [percentage]
- Supporting Evidence: [details]

### Chain of Custody
[Complete log]

### Signature
[Digital signature]
```

## Statistical Analysis

### Benford's Law Application

**Research**: Applying Benford's Law to detect manipulation

```python
import numpy as np
from collections import Counter

def benfords_law_test(pixel_values):
    """
    Natural images follow Benford's Law
    Manipulated images often deviate
    """
    # Extract first digits
    first_digits = [int(str(abs(x))[0]) for x in pixel_values if x != 0]
    
    # Count frequencies
    counts = Counter(first_digits)
    observed = [counts[d] / len(first_digits) for d in range(1, 10)]
    
    # Benford's expected distribution
    expected = [np.log10(1 + 1/d) for d in range(1, 10)]
    
    # Chi-square test
    chi_square = sum((o - e)**2 / e for o, e in zip(observed, expected))
    
    # Critical value at 95% confidence: 15.507
    return chi_square > 15.507
```

## Timeline Reconstruction

### Event Sequencing

```python
class TimelineAnalyzer:
    def reconstruct_timeline(self, evidence_files):
        """
        Build chronological timeline of events
        """
        events = []
        
        for file in evidence_files:
            metadata = self.extract_metadata(file)
            
            events.append({
                'timestamp': metadata['created'],
                'event': 'FILE_CREATED',
                'file': file,
                'source': metadata.get('camera_model')
            })
            
            if metadata['modified'] != metadata['created']:
                events.append({
                    'timestamp': metadata['modified'],
                    'event': 'FILE_MODIFIED',
                    'file': file
                })
        
        # Sort chronologically
        events.sort(key=lambda x: x['timestamp'])
        return events
```

## Research Citations

1. **Verdoliva, L. (2020)** - Media Forensics Overview
   - DOI: 10.1109/JSTSP.2020.3002101

2. **ISO/IEC 27037:2012** - Digital Evidence Guidelines

3. **Matern et al. (2019)** - Visual Artifacts

4. **Daubert v. Merrell Dow** - 509 U.S. 579 (1993)

---

**Next**: [Legal Framework →](./legal-framework.md)
