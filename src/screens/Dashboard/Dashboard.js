import '../Dashboard/Dashboard.css'
import { ReactComponent as Option } from '../../assets/icons/options-horizontal.svg'
import Logo from '../../assets/images/logo.svg'
import { ReactComponent as Todo } from '../../assets/icons/todo.svg'
import { ReactComponent as Form } from '../../assets/icons/form.svg'



const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="header">
                <div className="space">
                    <div className="spaceName">
                        <img src={Logo} alt='logo' />
                        <div className="title">Widget Site</div>
                    </div>
                    <div className="optionBtn">
                        <Option />
                    </div>
                </div>
                <div className="operate">
                    <button type="button" class="btn">Share</button>
                    <div class="dropdown">
                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Automations
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Option 1</a></li>
                            <li><a class="dropdown-item" href="#">Option 2</a></li>
                            <li><a class="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="body">
                <div className="bodySpaceName">
                    <div className="space">
                        <div className="spaceName">
                            <div className="bodyTitle">Widget Site</div>
                        </div>
                        <div className="optionBtn">
                            <Option />
                        </div>
                    </div>
                    <button class="btn">Add Task</button>
                </div>
                <div className="bodyContent">
                    <div className="contentHeader">
                        <div className='feature'>
                            <div className="list">
                                <Todo />
                                <span>To Do</span>
                            </div>
                            <div className="list">
                                <Form />
                                <span>Validation Check</span>
                            </div>
                        </div>
                        <div className='searchSection'>
                            <input type='text'
                                placeholder='Search Task'
                            />
                        </div>
                    </div>
                    <div className="content">
                        <div className="taskBox">
                            <div className="taskTitle">
                                TO DO
                            </div>
                            <div className='cardList'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.Some quick example text to build on the card title and make up the bulk of the card's content. The capital city of Nepal is Kathmandu.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> Develop Dashboard</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;