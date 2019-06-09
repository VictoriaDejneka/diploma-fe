import React, {Component} from 'react';
import style from './Employees.module.css'
import axios from 'axios'
import Poll from 'react-polls';

const satisfactionAnswers = [
  {option: '1', votes: 0},
  {option: '2', votes: 0},
  {option: '3', votes: 0},
  {option: '4', votes: 0},
  {option: '5', votes: 0}
]
const qualityAnswers = [
  {option: '1', votes: 0},
  {option: '2', votes: 0},
  {option: '3', votes: 0},
  {option: '4', votes: 0},
  {option: '5', votes: 0}
]
const rebuyAnswers = [
  {option: '1', votes: 0},
  {option: '2', votes: 0},
  {option: '3', votes: 0},
  {option: '4', votes: 0},
  {option: '5', votes: 0}
]

const answers = {
  4: satisfactionAnswers,
  5: qualityAnswers,
  6: rebuyAnswers
};

class Employees extends Component {
  state = {
    questions: [{name: "", id: 4, answers: []}]
  }
  handleVote = voteAnswer => {

  }

  render() {
    // const {satisfactionAnswers, qualityAnswers, rebuyAnswers} = this.state;
    console.log(this.state.questions);
    const questionsList = this.state.questions.map(question => (
      <div>
        <Poll question={question.name} answers={answers[question.id]} onVote={this.handleVote}/>
      </div>
    ));

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Вася Печкин</h1>
            <p className="lead">Старший менеджер по продажам</p>
          </div>
        </div>
        <div>{questionsList}</div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:8080/questions?type_id=2')
      .then(questions => {
        this.setState({
            questions: questions.data
          }
        );
        // questions.forEach(resQuestion => {
        //   axios.get(`http://localhost:8080/${resQuestion.id}/answers`)
        //     .then(answers => {
        //       questions.find(question => question.id == resQuestion.id).answers = answers;
        //       this.setState({
        //         questions
        //       })
        //     })
        // })
      })

  }
}

export default Employees;