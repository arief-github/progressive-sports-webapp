import '../style/style.css'

const hello = document.createElement('h1');
const wrapper = document.createElement('div');

hello.textContent = 'Tailwind Time 😎 ';
hello.classList.add(
  'bg-gradient-to-r', 'from-green-400', 'to-blue-500',
  'text-transparent', 'text-9xl', 'bg-clip-text', 'font-extrabold'
  );

wrapper.classList.add(
  'flex', 'w-full', 'h-screen',
  'justify-center', 'items-center'
  )

wrapper.appendChild(hello);
document.body.appendChild(wrapper);