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
```

### Audio Analysis

```
□ Listen for robotic cadence
□ Check background noise consistency
□ Verify breathing patterns
□ Analyze emotional tone authenticity
□ Compare to known voice samples
```

## Automated Detection Tools

### Open Source
1. **Deepware Scanner** - Browser-based detection
   - URL: https://scanner.deepware.ai
   - Accuracy: ~75%

2. **Sensity** - Video verification platform
   - Real-time analysis
   - API available

### Commercial Solutions
1. **Intel FakeCatcher** - Real-time detection
   - 96% accuracy rate
   - Blood flow analysis

2. **Microsoft Video Authenticator**
   - Confidence scores
   - Frame-by-frame analysis

3. **Truepic** - Media authentication
   - Blockchain verification
   - Chain of custody

## Technical Detection

### Metadata Analysis

```bash
# Check video metadata
exiftool video.mp4 | grep -i "create\|modify\|software"

# Verify file integrity
ffmpeg -i video.mp4 -f null -
```

### Frame-by-Frame Analysis

```python
import cv2

def analyze_frames(video_path):
    cap = cv2.VideoCapture(video_path)
    inconsistencies = []
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Check for artifacts
        if detect_artifacts(frame):
            frame_num = cap.get(cv2.CAP_PROP_POS_FRAMES)
            inconsistencies.append(frame_num)
    
    return inconsistencies
```

## Verification Strategies

### Multi-Source Verification
1. **Cross-reference** with official sources
2. **Reverse image search** for original content
3. **Contact verification** - Reach out directly
4. **Timestamp analysis** - Check publication dates

### Context Clues
- Does the content match known behavior?
- Is the source credible?
- Are there other versions available?
- What's the motivation for sharing?

## Detection Accuracy

| Method | Accuracy | Speed | Cost |
|--------|----------|-------|------|
| Manual | 60-70% | Slow | Free |
| Open Source | 75-85% | Medium | Free |
| Commercial AI | 90-95% | Fast | $$$ |
| Expert Analysis | 95-99% | Slow | $$$$ |

## Red Flags

### High-Risk Scenarios
⚠️ Urgent financial requests
⚠️ Sensitive information requests
⚠️ Out-of-character behavior
⚠️ Unusual communication channels
⚠️ Pressure for immediate action

---

**Next**: [Prevention Strategies →](./prevention.md)
