
/**
 * { name, age, course_key }: 
  {name: string, age: number, course_key: string}
 */

interface IMainContent{
  name: string;
  age: number | string;
  course_key: string;
}

const players = ['Jordan', 'Sam', 'Mike', 'Lebron', 'Tyson'];

const MainContent = (props: IMainContent) => {
  const {age, name} = props;

  const RenderSidePanel = () => {
    return (
      <div>Side Panel</div>
    )
  }

  const RenderMainPanel = () => {
    let title = 'Main Panel'
    return (
      <div>
        <h1>{title}</h1>
        {
          players.map((player, index) => {
            let num = 10 + index;
            return <div>{ num + '=>' + player }</div>
          })
        }
      </div>
    )
  }

  return (
    <div className="container">
      <div className="side-panel">
        <RenderSidePanel />
      </div>
      <div className="main-panel">
        <RenderMainPanel />
      </div>
    </div>
  )
}

export default MainContent