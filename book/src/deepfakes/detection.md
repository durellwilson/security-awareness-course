# Detection Techniques

## Manual Detection Methods

### Visual Analysis Checklist

```
□ Check eye reflections (should match light sources)
□ Observe blinking patterns (natural vs. robotic)
□ Examine face boundaries (blurring, artifacts)
□ Verify skin texture consistency
□ Look for lighting mismatches
□ Check hair movement realism
□ Analyze facial expressions
□ Verify lip-sync accuracy
□ Check for temporal inconsistencies
□ Examine background stability
```

### Audio Analysis

```
□ Listen for robotic cadence
□ Check background noise consistency
□ Verify breathing patterns
□ Analyze emotional tone authenticity
□ Compare to known voice samples
□ Check for audio artifacts
□ Verify speech patterns
□ Analyze prosody (intonation, stress, rhythm)
```

## Automated Detection Tools

### Open Source Solutions
1. **Deepware Scanner** - Browser-based detection
   - URL: https://scanner.deepware.ai
   - Accuracy: ~75%
   - Free to use

2. **Sensity** - Video verification platform
   - Real-time analysis
   - API available
   - Enterprise support

3. **FaceForensics++** - Research benchmark
   - 1.8M+ images
   - Multiple detection methods
   - Academic use

### Commercial Solutions
1. **Intel FakeCatcher** - Real-time detection
   - 96% accuracy rate
   - Blood flow analysis
   - Enterprise deployment

2. **Microsoft Video Authenticator**
   - Confidence scores
   - Frame-by-frame analysis
   - Integration with Office 365

3. **Truepic** - Media authentication
   - Blockchain verification
   - Chain of custody
   - Legal admissibility

**Source**: [Tolosana et al., 2020 - DeepFakes and Beyond: A Survey][1]

## Technical Detection Methods

### Metadata Analysis

```bash
# Check video metadata
exiftool video.mp4 | grep -i "create\|modify\|software"

# Verify file integrity
ffmpeg -i video.mp4 -f null -

# Check for compression artifacts
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,r_frame_rate video.mp4
```

### Frame-by-Frame Analysis

```python
import cv2
import numpy as np

def analyze_frames(video_path):
    cap = cv2.VideoCapture(video_path)
    inconsistencies = []
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Check for artifacts and anomalies
        if detect_artifacts(frame):
            frame_num = cap.get(cv2.CAP_PROP_POS_FRAMES)
            inconsistencies.append(frame_num)
    
    cap.release()
    return inconsistencies

def detect_artifacts(frame):
    # Check for common deepfake artifacts
    # - Unnatural color transitions
    # - Blurring at face boundaries
    # - Inconsistent lighting
    return False  # Placeholder
```

### Forensic Analysis Approaches

**Spatial Analysis**:
- CNN-based face detection
- Facial landmark analysis
- Texture inconsistency detection

**Temporal Analysis**:
- Optical flow analysis
- Frame-to-frame consistency
- Biological signal detection (blood flow)

**Frequency Domain**:
- Fourier analysis
- Wavelet decomposition
- Spectral anomaly detection

**Source**: [Rossler et al., 2019 - FaceForensics++][2]

## Verification Strategies

### Multi-Source Verification
1. **Cross-reference** with official sources
2. **Reverse image search** for original content
3. **Contact verification** - Reach out directly
4. **Timestamp analysis** - Check publication dates
5. **Source credibility** - Verify publisher

### Context Clues
- Does the content match known behavior?
- Is the source credible and verifiable?
- Are there other versions available?
- What's the motivation for sharing?
- Does the timing seem suspicious?

## Detection Accuracy Comparison

| Method | Accuracy | Speed | Cost | Scalability |
|--------|----------|-------|------|-------------|
| Manual | 60-70% | Slow | Free | Low |
| Open Source | 75-85% | Medium | Free | Medium |
| Commercial AI | 90-95% | Fast | $$$ | High |
| Expert Analysis | 95-99% | Slow | $$$$ | Low |

## Red Flags & Warning Signs

### High-Risk Scenarios
⚠️ Urgent financial requests
⚠️ Sensitive information requests
⚠️ Out-of-character behavior
⚠️ Unusual communication channels
⚠️ Pressure for immediate action
⚠️ Requests for secrecy
⚠️ Unusual emotional state

### Technical Red Flags
⚠️ Unnatural eye movements
⚠️ Inconsistent lighting
⚠️ Blurring at face boundaries
⚠️ Unnatural blinking patterns
⚠️ Audio-visual misalignment
⚠️ Background inconsistencies

## Statistics

- **96%** of deepfakes are non-consensual content
- **500%** increase in deepfake incidents (2022-2024)
- **$250M+** in documented fraud losses
- **$243K** average incident cost in financial sector

**Source**: [Sensity AI - State of Deepfakes Report][3]

---

[1]: https://doi.org/10.1016/j.inffus.2020.06.014
[2]: https://doi.org/10.1109/ICCV.2019.00009
[3]: https://sensity.ai/deepfakes-report/

**Next**: [Prevention Strategies →](./prevention.md)
