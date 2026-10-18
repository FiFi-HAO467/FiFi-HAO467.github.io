(() => {
  'use strict';
  const papers = window.ACADEMIC_CONTENT || [];
  const illustrationCandidates = {
    A: {file: 'candidate-a.webp', alt: 'Editorial cartoon of a surgeon reviewing endoscopic images, video evidence, and a surgical knowledge graph on two monitors.'},
    B: {file: 'candidate-b.webp', alt: 'Editorial cartoon of a surgeon operating a console connected to a patient-side multiarm surgical robotic system, with an AI-assisted endoscopic display.'},
    C: {file: 'candidate-c.webp', alt: 'Editorial cartoon of a clinician reviewing surgical video, anatomical localization, and a knowledge graph integrated through a conceptual multimodal reasoning system.'}
  };
  const candidate = illustrationCandidates[new URLSearchParams(window.location.search).get('illustration')];
  if (candidate) {
    const heroImage = document.querySelector('.hero-art img');
    heroImage.src = `assets/illustration-candidates/${candidate.file}`;
    heroImage.alt = candidate.alt;
  }
  const list = document.getElementById('publication-list');
  const counter = document.getElementById('publication-count');
  const dialog = document.getElementById('paper-dialog');
  const dialogContent = document.getElementById('dialog-content');
  let previousFocus = null;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function addAuthors(target, text) {
    const pieces = text.split('Pengfei Hao');
    pieces.forEach((piece, i) => {
      if (i) target.append(element('strong', '', 'Pengfei Hao'));
      target.append(document.createTextNode(piece));
    });
  }
  function resourceLink(resource, className = '') {
    const a = element('a', className, `${resource.label} ↗`);
    a.href = resource.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }
  function detailButton(paper, className, label) {
    const button = element('button', className, label);
    button.type = 'button';
    button.dataset.paper = paper.id;
    return button;
  }
  function renderPublications(filter = 'all') {
    const visible = papers.filter(p => filter === 'all' || p.category === filter);
    list.replaceChildren();
    visible.forEach(paper => {
      const article = element('article', 'publication');
      article.dataset.category = paper.category;
      article.append(element('div', 'pub-year', paper.year));
      const content = element('div', 'pub-content');
      const heading = element('h3');
      if (paper.links.length) {
        const titleLink = resourceLink({label: paper.title, url: paper.links[0].url});
        titleLink.textContent = paper.title;
        heading.append(titleLink);
      } else heading.textContent = paper.title;
      content.append(heading);
      if (paper.authors) {
        const authors = element('p', 'pub-authors');
        addAuthors(authors, paper.authors);
        content.append(authors);
      }
      const meta = element('div', 'pub-meta');
      meta.append(element('span', `pub-venue${paper.manuscript ? ' manuscript' : ''}`, paper.venue));
      if (paper.status) meta.append(element('span', 'pub-detail', paper.status));
      content.append(meta);
      article.append(content);
      if (!paper.compact) {
        content.append(element('p', 'pub-description', paper.description));
        const links = element('div', 'pub-links');
        paper.links.forEach(link => links.append(resourceLink(link)));
        links.append(detailButton(paper, '', paper.id === 'surgintent' ? 'Overview +' : 'Summary +'));
        content.append(links);
        const open = detailButton(paper, 'pub-open', '↗');
        open.setAttribute('aria-label', `Read overview of ${paper.shortTitle}`);
        article.append(open);
      }
      list.append(article);
    });
    counter.textContent = `${visible.length} ${visible.length === 1 ? 'work' : 'works'}`;
  }

  function paperFigure(src, alt, caption, fullSize) {
    const figure = element('figure', 'dialog-figure');
    const imageLink = element('a');
    imageLink.href = fullSize || src;
    imageLink.target = '_blank';
    imageLink.rel = 'noopener noreferrer';
    imageLink.setAttribute('aria-label', `Open ${caption || 'research figure'} at full size`);
    const img = element('img');
    img.src = src;
    img.alt = alt;
    imageLink.append(img);
    const figcaption = element('figcaption');
    if (caption) figcaption.append(element('p', '', caption));
    figcaption.append(resourceLink({label: 'View full-size image', url: fullSize || src}, 'text-link'));
    figure.append(imageLink, figcaption);
    return figure;
  }

  function openPaper(id) {
    const paper = papers.find(p => p.id === id);
    if (!paper || paper.compact) return;
    previousFocus = document.activeElement;
    dialogContent.replaceChildren();
    dialogContent.append(element('p', 'section-kicker', paper.category === 'surgical' ? 'SURGICAL AI / RESEARCH OVERVIEW' : 'MEDICAL AI / RESEARCH OVERVIEW'));
    const title = element('h2', '', paper.shortTitle);
    title.id = 'dialog-title';
    dialogContent.append(title, element('p', 'dialog-full-title', paper.title));
    dialogContent.append(element('p', 'dialog-meta', [paper.venue, paper.status].filter(Boolean).join(' · ')));
    if (paper.figure) {
      dialogContent.append(paperFigure(paper.figure, paper.figureAlt, paper.figureCaption, paper.figureFull));
    }
    const body = element('div', 'dialog-body');
    if (paper.authors) {
      const authors = element('p');
      addAuthors(authors, paper.authors);
      body.append(authors);
    }
    body.append(element('h3', '', paper.abstractLabel || 'Abstract'), element('p', '', paper.abstract));
    if (paper.results) {
      body.append(element('h3', '', 'SurgIntent-Bench · Overall accuracy'));
      paper.results.forEach(([label, value]) => {
        const row = element('div', 'result-row');
        row.append(element('span', '', label), element('strong', '', value));
        body.append(row);
      });
      body.append(element('p', 'result-note', paper.resultNote));
    }
    dialogContent.append(body);
    if (paper.figures && paper.figures.length) {
      const gallery = element('div', 'dialog-gallery');
      gallery.append(element('h3', '', paper.figureGalleryTitle || 'Dataset and task'));
      paper.figures.forEach(figure => gallery.append(paperFigure(figure.src, figure.alt, figure.caption, figure.fullSize)));
      dialogContent.append(gallery);
    }
    if (paper.links.length) {
      const links = element('div', 'dialog-links');
      paper.links.forEach(link => links.append(resourceLink(link, 'text-link')));
      dialogContent.append(links);
    }
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  }

  function closeDialog() { dialog.close(); }
  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(other => {
        const active = other === button;
        other.classList.toggle('active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      renderPublications(button.dataset.filter);
    });
  });
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-paper]');
    if (trigger) openPaper(trigger.dataset.paper);
  });
  document.querySelector('.dialog-close').addEventListener('click', closeDialog);
  document.querySelector('.dialog-dismiss').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (previousFocus && document.contains(previousFocus)) previousFocus.focus({preventScroll:true});
  });
  renderPublications();
})();
