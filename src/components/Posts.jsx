import React from 'react'

const postOne = () => {
  return (
    <div>
  <div className="bg-gray-700 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Recent Posts</h2>
      <p className="mt-2 text-lg leading-8 text-gray-300">Check out our latest posts to stay updated with the freshest insights and stories!</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Music</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              Unleashing Creativity: The Power of Innovation
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
          I think what Kanye West is about is, like, his whole thing is about breaking barriers and setting new standards.
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://media.gq.com/photos/5ad93798ceb93861adb912d8/1:1/w_2687,h_2687,c_limit/kanye-west-0814-GQ-FEKW01.01.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                Kanye West 
              </a>
            </p>
            <p className="text-gray-400">Artist and entrepreneur</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2024-08-20" className="text-gray-500">Aug 20, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Discipline</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              The art of Discipline
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">It’s about embracing the grind and pushing through every obstacle life throws at you. It’s waking up when you don’t want to, running those extra miles, and keeping your eyes on the prize no matter how much it hurts.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src='https://interesting.cz/books/images/osoba-SX4R8RO37S-david-goggins.webp' alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                David Goggins
              </a>
            </p>
            <p className="text-gray-400">Navy SEAL, ultra-endurance athlete, and motivational speaker</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2024-08-20" className="text-gray-500">Aug 20, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Religion</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              Embracing the Divine: Understanding God Through Faith, Love, and Forgiveness
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">The concept of God, in many traditions, embodies the ultimate source of faith, love, and forgiveness. Faith in God provides believers with a sense of purpose and direction, anchoring them in times of doubt and adversity.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://64.media.tumblr.com/253cff26250f92b86ffddbfabc84adf5/4e1b43eebbbb9669-f1/s1280x1920/61e9ec932e11159ad0cedab35c3829e090b3f586.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                Anibal Andrade
              </a>
            </p>
            <p className="text-gray-400">Software Engineer and Artist</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2024-08-20" className="text-gray-500">Aug 19, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Mathematics</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              A Journey Through Error Analysis
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">Mathematics is not just about solving equations or crunching numbers; it's about mastering the art of precision and accuracy.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://i.pinimg.com/736x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                Isaac Medrano
              </a>
            </p>
            <p className="text-gray-400">Sofware engineer and mathematic enthusiast</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2024-08-20" className="text-gray-500">Aug 22, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Videogames</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              The Soulsborne Saga
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">The Soulsborne games, renowned for their brutal difficulty and intricate lore, offer an experience that transcends traditional gaming. From Demon's Souls to Elden Ring, these titles immerse players in dark, atmospheric worlds where every battle tests their skills and perseverance.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-1/347091625_131068123305653_7769773525661014323_n.jpg?stp=dst-jpg_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGJBM8fDwZZcxbRH0UezaSzaW5lZnzz6ahpbmVmfPPpqDM6dYQN6i5YTawZ5CpFYNlv1JS_WQbjVaZT74gZ74IN&_nc_ohc=N7coqbK5zzAQ7kNvgFWrTmJ&_nc_ht=scontent.fsal14-1.fna&oh=00_AYA2uv01uzI2uziqYIFHSWwZrKcooAs5ex2q7rJwhn-H0w&oe=66CAFA77" alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                Anderson Amilcar
              </a>
            </p>
            <p className="text-gray-400">Software engineer and videogame lover</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between bg-gray-800 p-6 rounded-xl shadow-inner">
        <div className="flex items-center gap-x-4 text-xs text-gray-400">
          <time datetime="2024-08-20" className="text-gray-500">Aug 22, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-500">Fitness</a>
        </div>
        <div className="group relative mt-4">
          <h3 className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
            <a href="#">
              <span className="absolute inset-0"></span>
              Lifting heavy weights 
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">Failure isn’t the end; it’s just the beginning of a stronger, more resilient you. Every setback is a setup for a comeback—embrace the struggle and let it forge your path to success."</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-1/440809792_2177039012635627_5273268719062377166_n.jpg?stp=cp6_dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHFiUfnvaytJofJsswwv3-83_1ppczRY47f_WmlzNFjjqpg_8gShD5-5pGq83PYLbYN5qU7OtM6RlxjgM0FibA5&_nc_ohc=NMn0LvO0eZ8Q7kNvgFvLrPC&_nc_ht=scontent.fsal2-2.fna&oh=00_AYD3LXSwmpeqxdlX3BcFlAfVyIbhD5HCVO6hpKRgan8kRw&oe=66CB176C" alt="" className="h-10 w-10 rounded-full bg-gray-600"/>
          <div className="text-sm leading-6 text-gray-300">
            <p className="font-semibold text-gray-100">
              <a href="#">
                <span className="absolute inset-0"></span>
                Mauricio Parada
              </a>
            </p>
            <p className="text-gray-400">Software engineer</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>


    </div>
  )
}

export default postOne
