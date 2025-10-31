import Foundation

actor LearningAnalytics {
    private var profiles: [String: LearnerProfile] = [:]
    
    func trackProgress(_ learnerId: String, module: String, score: Double) async {
        var profile = profiles[learnerId] ?? LearnerProfile(id: learnerId)
        profile.completions[module] = score
        profile.overallScore = calculateAverage(profile.completions)
        profiles[learnerId] = profile
    }
    
    func getInsights(_ learnerId: String) async -> LearningInsights {
        guard let profile = profiles[learnerId] else {
            return LearningInsights.empty
        }
        
        let strengths = profile.completions.filter { $0.value >= 0.8 }.map { $0.key }
        let weaknesses = profile.completions.filter { $0.value < 0.6 }.map { $0.key }
        
        return LearningInsights(
            strengths: strengths,
            weaknesses: weaknesses,
            overallScore: profile.overallScore,
            completionRate: Double(profile.completions.count) / 4.0
        )
    }
    
    private func calculateAverage(_ scores: [String: Double]) -> Double {
        guard !scores.isEmpty else { return 0 }
        return scores.values.reduce(0, +) / Double(scores.count)
    }
}

struct LearnerProfile {
    let id: String
    var completions: [String: Double] = [:]
    var overallScore: Double = 0
}

struct LearningInsights {
    let strengths: [String]
    let weaknesses: [String]
    let overallScore: Double
    let completionRate: Double
    
    static var empty: LearningInsights {
        LearningInsights(strengths: [], weaknesses: [], overallScore: 0, completionRate: 0)
    }
}
