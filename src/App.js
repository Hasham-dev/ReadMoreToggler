import React,{ useState } from 'react'
import { Para } from './App.element'

function App() {

  const [state, setState] = useState(true)

  const toggleHandler = () => {
    setState(!state)
  }

  return (
    <div>
      <Para collapse={state} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt illo ex ut iure id, suscipit quos quas aut optio fuga quis, vel, expedita ullam perferendis. Porro dignissimos eum aut.
        Quod ex aut voluptates animi eum quo fuga, corporis molestias consequuntur odio blanditiis illum error, minima atque voluptas velit et mollitia dolorum enim amet sequi accusantium laboriosam, placeat doloribus! Eligendi!
        Quisquam sit doloribus impedit a, odio sequi minima incidunt voluptatum expedita similique. Quidem iusto deserunt sint aut hic doloremque odit ullam vel debitis magni veritatis, modi tempore laboriosam? Quam, officiis!
        Quae cum ea accusantium labore autem accusamus voluptatem vero dignissimos, cumque iusto consectetur? Fugiat quis, dolor mollitia nemo maxime numquam quam repellat molestias in quaerat inventore cupiditate quidem, quas odio.
        Qui veniam laboriosam eos, inventore eligendi optio incidunt quisquam fugiat distinctio, excepturi in at explicabo culpa repudiandae adipisci voluptas debitis libero? Quo facere molestiae voluptates, vitae quibusdam quam itaque deserunt?
        Quasi molestiae dolor sit eveniet odit! Quibusdam culpa molestias, obcaecati assumenda iusto quaerat, cumque saepe voluptatum eum, aperiam perspiciatis autem quod. Architecto deleniti tenetur aut pariatur tempora sint, magni corporis.
      </Para>
      <button onClick={toggleHandler}>
        { state ? 'Read More' : 'Read Less'}
      </button>
    </div>
  );
}

export default App;
