---
layout: page
permalink: /teaching/convex-optimization-2026/
title: "TTIC 31070: Convex Optimization (Spring 2026)"
description:
nav: false
display_title: true
_styles: |
  .course-info {
    margin-bottom: 1.5rem;
  }
  .course-info table {
    width: auto;
  }
  .course-info td {
    padding: 0.2rem 1rem 0.2rem 0;
    vertical-align: top;
  }
  .course-info td:first-child {
    font-weight: bold;
    white-space: nowrap;
    color: var(--global-text-color-light);
  }
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
  }
  .schedule-table thead th {
    border-bottom: 2px solid var(--global-divider-color);
    padding: 0.5rem 0.75rem;
    text-align: left;
    font-weight: bold;
  }
  .schedule-table tbody td {
    padding: 0.45rem 0.75rem;
    border-bottom: 1px solid var(--global-divider-color);
    vertical-align: top;
  }
  .schedule-table .lec-num {
    font-weight: bold;
    white-space: nowrap;
    width: 2rem;
  }
  .schedule-table .lec-date {
    white-space: nowrap;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    width: 6rem;
  }
  .schedule-table .materials a {
    display: inline-block;
    font-size: 0.85rem;
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.25rem;
    border: 1px solid var(--global-theme-color);
    color: var(--global-theme-color);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  .schedule-table .materials a:hover {
    background-color: var(--global-theme-color);
    color: var(--global-hover-text-color);
    text-decoration: none;
  }
  .placeholder-cell {
    text-align: center;
    color: var(--global-text-color-light);
    font-style: italic;
    padding: 1rem;
  }
---

Cross-listed as TTIC 31070 / CAAM 31015 / CMSC 35470 / BUSF 36903 / STAT 31015.

<div class="course-info">
<table>
  <tr><td>Instructor</td><td><a href="/">Zhiyuan Li</a></td></tr>
  <tr><td>Email</td><td><a href="mailto:ttic-31070-convex-optimization-2026@ttic.edu">ttic-31070-convex-optimization-2026@ttic.edu</a></td></tr>
  <tr><td>Schedule</td><td>Tuesday & Thursday, 2:00 – 3:20 PM</td></tr>
  <tr><td>Location</td><td>TTIC 530</td></tr>
  <tr><td>Office Hours</td><td>Zhiyuan Li: Tuesday & Thursday 3:20 – 3:50 PM, TTIC 508. TA office hours TBD.</td></tr>
  <tr><td>TAs</td><td><a href="https://shuox.ttic.edu/">Shuo Xie</a>, <a href="https://math.uchicago.edu/~medvedev/">Marko Medvedev</a>, <a href="https://stat.uchicago.edu/people/profile/beining-wu/">Beining Wu</a>, <a href="https://datascience.uchicago.edu/people/ruize-richard-xu/">Richard Xu</a></td></tr>
  <tr><td>Canvas</td><td><a href="https://canvas.uchicago.edu/courses/71971">canvas.uchicago.edu/courses/71971</a></td></tr>
</table>
</div>

## Course Description

The course will cover techniques in unconstrained and constrained convex optimization and a practical introduction to convex duality. The course will focus on (1) formulating and understanding convex optimization problems and studying their properties; (2) presenting and understanding optimization approaches; and (3) understanding the dual problem.

**Topics include:**
- Formalization of optimization problems
- First-order optimization methods: gradient descent, mirror descent, non-Euclidean steepest descent, acceleration, and Newton's method
- Standard formulations of constrained optimization: linear, quadratic, conic, and semidefinite programming
- KKT optimality conditions
- Lagrangian duality, constraint qualification, weak and strong duality
- Fenchel conjugacy and its relationship to Lagrangian duality
- Equality-constrained Newton method
- Log barrier (central path) methods and primal-dual optimization methods
- Cutting-plane methods: center of mass and ellipsoid algorithm

## Prerequisites

Linear Algebra, Vector Calculus, and Algorithms at undergraduate level, OR Matrix Computation (STAT/CAAM 30900). CMSC 25300 can replace Linear Algebra and Vector Analysis, but an algorithms course would still be required.

**Registration:**
- PhD students in programs where the course is listed (TTIC, STAT, CAM, CS, or Booth) may register independently after checking they have the required prerequisites.
- Other graduate students, including master students and students in other PhD programs, may register if they took Matrix Computation, or after emailing explaining their prerequisites and receiving permission from the instructor.
- Undergraduate students may only register after receiving permission from the instructor based on the prerequisites and background.

## Schedule and Materials

*Schedule is subject to change.*

<table class="schedule-table">
<thead>
  <tr><th>#</th><th>Date</th><th>Topic</th><th>Materials</th></tr>
</thead>
<tbody>
  <tr><td class="lec-num">1</td><td class="lec-date">Tue, Mar 24</td><td>Introduction and Convexity</td><td class="materials"><a href="https://zhiyuanli.ttic.edu/convex-optimization-site/notes/lecture01.pdf">Notes</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/slides/lecture01_slides.pdf">Slides</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-1___-Introduction-and-Convexity/">Lean</a></td></tr>
  <tr><td class="lec-num">2</td><td class="lec-date">Thu, Mar 26</td><td>Separation and Duality</td><td class="materials"><a href="https://zhiyuanli.ttic.edu/convex-optimization-site/notes/lecture02.pdf">Notes</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/slides/lecture02_slides.pdf">Slides</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-2___-Separation-and-Duality/">Lean</a></td></tr>
  <tr><td class="lec-num">3</td><td class="lec-date">Tue, Mar 31</td><td>Linear programming</td><td class="materials"><a href="https://zhiyuanli.ttic.edu/convex-optimization-site/notes/lecture03.pdf">Notes</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/slides/lecture03_slides.pdf">Slides</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-3___-Linear-Programming/">Lean</a></td></tr>
  <tr><td class="lec-num">4</td><td class="lec-date">Thu, Apr 2</td><td>Convex conjugates, and Marginal duality</td><td class="materials"><a href="https://zhiyuanli.ttic.edu/convex-optimization-site/notes/lecture04.pdf">Notes</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/slides/lecture04_slides.pdf">Slides</a> <a href="https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-4___-Convex-Conjugates___-and-Marginal-Duality/">Lean</a></td></tr>
  <tr><td class="lec-num">5</td><td class="lec-date">Tue, Apr 7</td><td>Lagrange multipliers, and KKT</td><td class="materials"></td></tr>
  <tr><td class="lec-num">6</td><td class="lec-date">Thu, Apr 9</td><td>Conic optimization</td><td class="materials"></td></tr>
  <tr><td class="lec-num">7</td><td class="lec-date">Tue, Apr 14</td><td>Cutting-plane methods</td><td class="materials"></td></tr>
  <tr><td class="lec-num">8</td><td class="lec-date">Thu, Apr 16</td><td>Steepest descent and descent lemmas</td><td class="materials"></td></tr>
  <tr><td class="lec-num">9</td><td class="lec-date">Tue, Apr 21</td><td>Mirror descent and Bregman divergences</td><td class="materials"></td></tr>
  <tr><td class="lec-num">10</td><td class="lec-date">Thu, Apr 23</td><td>Stochastic mirror descent and online-to-stochastic reduction</td><td class="materials"></td></tr>
  <tr><td class="lec-num">11</td><td class="lec-date">Tue, Apr 28</td><td>Adaptive Optimization and Well-structured preconditioner</td><td class="materials"></td></tr>
  <tr><td class="lec-num">12</td><td class="lec-date">Thu, Apr 30</td><td>Frank–Wolfe and Non-euclidean descent</td><td class="materials"></td></tr>
  <tr><td class="lec-num">13</td><td class="lec-date">Tue, May 5</td><td>Oracle Complexity Lower bounds</td><td class="materials"></td></tr>
  <tr><td class="lec-num">14</td><td class="lec-date">Thu, May 7</td><td>Accelerated Gradient Descent</td><td class="materials"></td></tr>
  <tr><td class="lec-num">15</td><td class="lec-date">Tue, May 12</td><td>TBD</td><td class="materials"></td></tr>
  <tr><td class="lec-num">16</td><td class="lec-date">Thu, May 14</td><td>Hessians and Newton's method</td><td class="materials"></td></tr>
  <tr><td class="lec-num">17</td><td class="lec-date">Tue, May 19</td><td>Self-concordant functions</td><td class="materials"></td></tr>
  <tr><td class="lec-num">18</td><td class="lec-date">Thu, May 21</td><td>Interior-point methods, and course review</td><td class="materials"></td></tr>
</tbody>
</table>

## Homework

Students are expected to do homeworks, but are not required to submit them. The final evaluation is determined by final exam and bonus points throughout the quarter. There is a high probability that the final exam samples from the homework.

<table class="schedule-table">
<thead>
  <tr><th>Assignment</th><th>Posted</th><th>Due</th><th>Materials</th></tr>
</thead>
<tbody>
  <tr><td>HW 1</td><td>Apr 2</td><td>Not required</td><td class="materials"><a href="https://zhiyuanli.ttic.edu/convex-optimization-site/hw/hw1.pdf">PDF</a></td></tr>
</tbody>
</table>

## LLM Usage Policy

You are welcome to use large language models (e.g., ChatGPT, Claude, Gemini) freely throughout this course, unless a specific assignment or exam explicitly states otherwise.

In fact, we encourage you to treat LLMs as an active learning tool. One of the most effective ways to solidify your understanding of the material is to engage in a dialogue with an LLM: ask it to explain a concept you find confusing, request a worked example, or have it walk you through a proof step by step. When a single answer raises a new question, follow that thread — dig deeper before moving on. This kind of depth-first exploration often builds stronger intuition than a single pass through the notes.

That said, keep in mind that LLMs can produce plausible-sounding but incorrect mathematics. Always verify any non-trivial claim against the course notes, textbooks, or your own reasoning. The goal is to use LLMs to accelerate your learning, not to substitute for it.

## Communication

- **Questions about course material** — ask on [Canvas](https://canvas.uchicago.edu/courses/71971), in person during TA or instructor office hours, or during lectures. Do not ask by direct email.
- **Homework clarifications or logistics** — ask on [Canvas](https://canvas.uchicago.edu/courses/71971) (preferred) or during TA office hours.
- **Help with homework** — seek help during TA office hours.
- **General comments or feedback** — via Canvas, anonymously via Canvas, to the staff email list, or directly to the relevant staff.
- **Personally sensitive issue** — you may contact any staff member you are comfortable contacting.

## Resources

- S. Bubeck, *Convex Optimization: Algorithms and Complexity*, Foundations and Trends in ML, 2015. [[pdf]](https://arxiv.org/pdf/1405.4980.pdf)
- A. Beck, *First-Order Methods in Optimization*, SIAM, 2017. [[SIAM]](https://epubs.siam.org/doi/10.1137/1.9781611974997)
- S. Boyd and L. Vandenberghe, *Convex Optimization*, Cambridge University Press, 2004. [[free online]](https://web.stanford.edu/~boyd/cvxbook/)
- D. Bertsekas, *Nonlinear Programming*, 2nd ed., Athena Scientific, 1999.
- J. Nocedal and S. Wright, *Numerical Optimization*, 2nd ed., Springer, 2006.
- D. Bertsekas, A. Nedic, and A. Ozdaglar, *Convex Analysis and Optimization*, Athena Scientific, 2003.
- A. Ben-Tal and A. Nemirovski, [*Lecture Notes on Modern Convex Optimization*](https://www2.isye.gatech.edu/~nemirovs/Lect_ModConvOpt.pdf), 2013.
- A. Nemirovski, [*Information Based Complexity of Convex Programming*](http://www2.isye.gatech.edu/~nemirovs/Lect_EMCO.pdf), 1994/5.
