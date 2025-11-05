// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Basics</li><li class="chapter-item expanded "><a href="basics/what-are-deepfakes.html"><strong aria-hidden="true">1.</strong> What are Deepfakes?</a></li><li class="chapter-item expanded "><a href="basics/types-of-deepfakes.html"><strong aria-hidden="true">2.</strong> Types of Deepfakes</a></li><li class="chapter-item expanded "><a href="basics/how-deepfakes-work.html"><strong aria-hidden="true">3.</strong> How Deepfakes Work</a></li><li class="chapter-item expanded "><a href="basics/prompt-injection.html"><strong aria-hidden="true">4.</strong> Prompt Injection</a></li><li class="chapter-item expanded "><a href="basics/real-world-impact.html"><strong aria-hidden="true">5.</strong> Real-World Impact</a></li><li class="chapter-item expanded affix "><li class="part-title">Detection</li><li class="chapter-item expanded "><a href="detection/visual-detection.html"><strong aria-hidden="true">6.</strong> Visual Detection</a></li><li class="chapter-item expanded "><a href="detection/audio-detection.html"><strong aria-hidden="true">7.</strong> Audio Detection</a></li><li class="chapter-item expanded "><a href="detection/metadata-analysis.html"><strong aria-hidden="true">8.</strong> Metadata Analysis</a></li><li class="chapter-item expanded "><a href="detection/ai-detection-tools.html"><strong aria-hidden="true">9.</strong> AI Detection Tools</a></li><li class="chapter-item expanded "><a href="detection/prompt-detection.html"><strong aria-hidden="true">10.</strong> Prompt Injection Detection</a></li><li class="chapter-item expanded affix "><li class="part-title">Prevention</li><li class="chapter-item expanded "><a href="prevention/authentication.html"><strong aria-hidden="true">11.</strong> Authentication Methods</a></li><li class="chapter-item expanded "><a href="prevention/content-verification.html"><strong aria-hidden="true">12.</strong> Content Verification</a></li><li class="chapter-item expanded "><a href="prevention/security-policies.html"><strong aria-hidden="true">13.</strong> Security Policies</a></li><li class="chapter-item expanded "><a href="prevention/input-validation.html"><strong aria-hidden="true">14.</strong> Input Validation</a></li><li class="chapter-item expanded "><a href="prevention/training.html"><strong aria-hidden="true">15.</strong> Training &amp; Awareness</a></li><li class="chapter-item expanded affix "><li class="part-title">Response</li><li class="chapter-item expanded "><a href="response/incident-response.html"><strong aria-hidden="true">16.</strong> Incident Response</a></li><li class="chapter-item expanded "><a href="response/reporting.html"><strong aria-hidden="true">17.</strong> Reporting Procedures</a></li><li class="chapter-item expanded "><a href="response/crisis-communication.html"><strong aria-hidden="true">18.</strong> Crisis Communication</a></li><li class="chapter-item expanded "><a href="response/recovery.html"><strong aria-hidden="true">19.</strong> Recovery Steps</a></li><li class="chapter-item expanded affix "><li class="part-title">Advanced Topics</li><li class="chapter-item expanded "><a href="advanced/detection-methods.html"><strong aria-hidden="true">20.</strong> Detection Methods</a></li><li class="chapter-item expanded "><a href="advanced/forensic-analysis.html"><strong aria-hidden="true">21.</strong> Forensic Analysis</a></li><li class="chapter-item expanded "><a href="advanced/legal-framework.html"><strong aria-hidden="true">22.</strong> Legal Framework</a></li><li class="chapter-item expanded "><a href="advanced/industry-standards.html"><strong aria-hidden="true">23.</strong> Industry Standards</a></li><li class="chapter-item expanded "><a href="advanced/threat-intelligence.html"><strong aria-hidden="true">24.</strong> Threat Intelligence</a></li><li class="chapter-item expanded affix "><li class="part-title">Community</li><li class="chapter-item expanded "><a href="community/index.html"><strong aria-hidden="true">25.</strong> Community Resources</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
