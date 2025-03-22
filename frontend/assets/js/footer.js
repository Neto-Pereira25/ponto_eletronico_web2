const footerContent = `
<footer class="py-3 my-4 bg-dark bg-gradient">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
    </ul>
    <p class="text-center text-light">&copy; 2025 Company, Inc</p>
  </footer>
`;

const footer = document.querySelector('.footer');

footer.innerHTML = footerContent;
