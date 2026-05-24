window.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".memory");

  // assign index to each photo
  items.forEach((item, index) => {
    item.style.setProperty("--i", index);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => observer.observe(item));

});

window.addEventListener("DOMContentLoaded", () => {

  const text = `If I have a chance to find someone again in this life, I'll find you. I'll find you again, again, and again — and I'll love you. Beyond the ups and downs, through any obstacles. Every time. Everywhere.

I'll love you even when you give me every reason not to. I'll love you, even if I have a million other options. In every universe, every possibility of existence, every single day, every second — it's you.

Always you. Unconditionally you. Unquestionably you. Permanently you. It was you all along, and it will always be you.

From the very beginning, until this very moment, and for all eternity — I'll choose you forever. I'll want you forever.

In each and every way. In every corner of the world.

I want you without hesitation. Without doubt. In sunshine and rain. From spring to winter.

Whatever it is — I want you. Completely. Madly.

That's all.`;

  const element = document.getElementById("typedLetter");

  let i = 0;

  function type(){
    if(i < text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 25); // speed (lower = faster)
    }
  }

  type();
});