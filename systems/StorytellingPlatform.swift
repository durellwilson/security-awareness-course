import Foundation

actor StorytellingPlatform {
    private var stories: [SecurityStory] = []
    
    func submitStory(_ story: SecurityStory) async -> String {
        let validated = validateStory(story)
        stories.append(validated)
        return validated.id
    }
    
    func getStories(category: StoryCategory) async -> [SecurityStory] {
        stories.filter { $0.category == category }
    }
    
    func getFeaturedStories() async -> [SecurityStory] {
        stories.sorted { $0.impactScore > $1.impactScore }.prefix(5).map { $0 }
    }
    
    private func validateStory(_ story: SecurityStory) -> SecurityStory {
        var validated = story
        validated.content = sanitizeContent(story.content)
        validated.impactScore = calculateImpact(story)
        return validated
    }
    
    private func sanitizeContent(_ content: String) -> String {
        content
            .replacingOccurrences(of: #"\b\d{3}-\d{2}-\d{4}\b"#, with: "[REDACTED]", options: .regularExpression)
            .replacingOccurrences(of: #"\b[\w\.-]+@[\w\.-]+\.\w+\b"#, with: "[EMAIL]", options: .regularExpression)
    }
    
    private func calculateImpact(_ story: SecurityStory) -> Double {
        var score = 0.0
        score += story.lessonsLearned.count > 0 ? 0.3 : 0
        score += story.preventionSteps.count > 0 ? 0.3 : 0
        score += story.outcome != nil ? 0.2 : 0
        score += story.verified ? 0.2 : 0
        return score
    }
}

struct SecurityStory {
    let id: String
    let authorId: String
    let category: StoryCategory
    var content: String
    let lessonsLearned: [String]
    let preventionSteps: [String]
    let outcome: String?
    let verified: Bool
    var impactScore: Double
}

enum StoryCategory {
    case deepfakeEncounter
    case promptInjectionAttempt
    case successfulPrevention
    case incidentResponse
}
