// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/People/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "* denotes equal contribution (α-β) denotes alphabetical order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-amp-services",
          title: "Teaching&amp;Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-officially-joining-ttic-as-a-tenure-track-assistant-professor-sparkles-smile",
          title: 'Officially joining TTIC as a tenure-track assistant professor.  :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-zhiyuan-and-professor-sanjeev-arora-princeton-university-were-jointly-named-recipients-of-a-superalignment-fast-grant-from-open-ai-to-further-investigate-the-weak-to-strong-generalization-problem",
          title: 'Zhiyuan and Professor Sanjeev Arora (Princeton University) were jointly named recipients of a...',
          description: "",
          section: "News",},{id: "news-5-papers-accpected-by-iclr-2025",
          title: '5 papers accpected by ICLR 2025!',
          description: "",
          section: "News",},{id: "news-serving-as-area-chair-for-icml-2025",
          title: 'Serving as Area Chair for ICML 2025',
          description: "",
          section: "News",},{id: "news-4-papers-accpected-by-icml-2025",
          title: '4 papers accpected by ICML 2025!',
          description: "",
          section: "News",},{id: "news-serving-as-area-chair-for-neurips-2025",
          title: 'Serving as Area Chair for NeurIPS 2025',
          description: "",
          section: "News",},{id: "news-presenting-pencil-at-2025-annual-meeting-of-ideal-institute",
          title: 'Presenting PENCIL at 2025 Annual Meeting of IDEAL Institute.',
          description: "",
          section: "News",},{id: "news-excited-to-co-organize-and-participate-in-midwest-machine-learning-symposium-at-uchicago",
          title: 'Excited to co-organize and participate in Midwest Machine Learning Symposium at Uchicago!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
