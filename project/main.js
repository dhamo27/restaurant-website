const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  

  ScrollReveal().reveal("#menu h1", {
    ...scrollRevealOption,
    origin: "top",
    delay: 100,
  });
  ScrollReveal().reveal(".container-fluid h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 100,
  });
  ScrollReveal().reveal("#types", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
  });
  ScrollReveal().reveal("#card1", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
  });
  ScrollReveal().reveal("#why-us img", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
  });
  ScrollReveal().reveal("#why", {
    ...scrollRevealOption,
    origin: "left",
    delay: 400,
  });
  ScrollReveal().reveal("#about h2", {
    ...scrollRevealOption,
    origin: "top",
    delay: 400,
  });
  ScrollReveal().reveal("#card2", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
  });
  ScrollReveal().reveal("#about p", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
  });
  ScrollReveal().reveal("#contact h1,a,p", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
  });
  ScrollReveal().reveal("#contact input,textarea,label", {
    ...scrollRevealOption,
    origin: "left",
    delay: 400,
  });
  