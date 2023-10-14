import patternCard from './assets/bg-pattern-card.svg'
import patternTop from './assets/bg-pattern-top.svg'
import patternBottom from './assets/bg-pattern-bottom.svg'
import avatar from './assets/image-victor.jpg'

function App() {
  return (
    <main className="relative min-h-screen flex justify-center items-center">
      <img
        className="absolute top-[-33%] left-[-11%]"
        src={patternTop}
        alt="Imagen de Background Top"
      />
      <img
        className="absolute bottom-[-87.7%] right-[-16.1%]"
        src={patternBottom}
        alt="Imagen de Background Top"
      />
      <article className="bg-white rounded-2xl flex items-center flex-col shadow-2xl m-7 z-10">
        <img className="rounded-t-2xl" src={patternCard} alt="Imagen de fondo de card" />
        <img
          className="rounded-full border-[5px] border-white -translate-y-[50%] "
          src={avatar}
          alt="Imagen de un usuario"
        />
        <h1 className="font-semibold -translate-y-9 text-very-dark-blue">
          Victor Crest <span className="font-light text-dark-gray pl-1"> 26</span>
        </h1>
        <p className="-translate-y-8 text-dark-gray text-sm">London</p>
        <footer className="flex border-t-[1px] w-full justify-between px-12 pr-14 pt-5 pb-3 -translate-y-2">
          <div className="flex items-center flex-col">
            <p className="font-bold text-lg">80K</p>
            <p className="text-dark-gray text-[.65rem] [letter-spacing:1px]">Followers</p>
          </div>
          <div className="flex items-center flex-col">
            <p className="font-bold text-lg [letter-spacing:0.5px]">803K</p>
            <p className="text-dark-gray text-[.65rem] [letter-spacing:1px]">Likes</p>
          </div>
          <div className="flex items-center flex-col">
            <p className="font-bold text-lg [letter-spacing:0.5px]">1.4K</p>
            <p className="text-dark-gray text-[.65rem] [letter-spacing:1px]">Photos</p>
          </div>
        </footer>
      </article>
    </main>
  )
}

export default App
