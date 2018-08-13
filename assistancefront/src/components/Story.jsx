import React,{Component} from 'react';
import './Home2.css';
class Story extends Component{
    render(){
        return(
 <div className="container-fluid text-black">
  <h3 className="text-center"> Archives:</h3>
  <div className="card-deck">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Conference in Ljusdal</h5>
      <p className="card-text">The members trying to bring together all ideas in conference</p>
      <p className="card-text"><small className="text-muted">Helded on 24 January in Ljusdal district</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Workshop at Säter</h5>
      <p className="card-text">Members of Säter and Falun in workshop of one day.</p>
      <p className="card-text"><small className="text-muted">Helded on 14 January in Falun district</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Conference in Säter</h5>
      <p className="card-text">The organisation leader Eric Rwa Mwenge expaining the gaols of organisation to the members of Säter.</p>
      <p className="card-text"><small className="text-muted">Helded on 24 Februaly in Säter district</small></p>
    </div>
  </div>
</div>


  <div className="card-deck">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Säter and Falun elected committee</h5>
      <p className="card-text">After a long day of workshop the members of Säter and Falun choosed a committee members who will represente others..</p>
      <p className="card-text"><small className="text-muted">Helded on 24 Februaly in Säter district</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Ideas</h5>
      <p className="card-text">Exchanging i deas.</p>
      <p className="card-text"><small className="text-muted">Helded on 24 Februaly in Säter district</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="ocgeconference3.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Dinner</h5>
      <p className="card-text">After a long day of workshop Säter leader received all members to his home and had good time together.</p>
      <p className="card-text"><small className="text-muted">Helded on 24 Februaly in Säter district</small></p>
    </div>
  </div>
</div>
</div>

        )
    }
}
export default Story;