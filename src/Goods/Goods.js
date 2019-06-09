import React, {Component} from 'react';
import style from './Goods.module.css'
import Poll from 'react-polls';
const satisfactionQuestion = '1'
const qualityQuestion = '2'
const rebuyQuestion = '3'
const satisfactionAnswers = [
  { option: '1', votes: 8 },
  { option: '2', votes: 2 },
  { option: '3', votes: 2 },
  { option: '4', votes: 2 },
  { option: '5', votes: 2 }
]
const qualityAnswers = [
  { option: '1', votes: 8 },
  { option: '2', votes: 2 },
  { option: '3', votes: 2 },
  { option: '4', votes: 2 },
  { option: '5', votes: 2 }
]
const rebuyAnswers = [
  { option: '1', votes: 8 },
  { option: '2', votes: 2 },
  { option: '3', votes: 2 },
  { option: '4', votes: 2 },
  { option: '5', votes: 2 }
]
class Goods extends Component {
  state = {
    satisfactionAnswers: [...satisfactionAnswers],
    qualityAnswers: [...qualityAnswers],
    rebuyAnswers: [...rebuyAnswers],
  }
  handleVote = voteAnswer => {

  }
  render() {
    const { satisfactionAnswers, qualityAnswers, rebuyAnswers} = this.state
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Микроволновая печь ERGO EM-2075</h1>
            <p className="lead">Мікрохвильова піч ERGO EM-2075 - відмінний вибір для любителів практичних рішень в дизайні і функціоналі побутової техніки. Просте і зрозуміле механічне управління і повноцінний спектр всіх необхідних режимів перетворюють ERGO EM-2075 на незамінну помічницю кожної господині.</p>
          </div>
        </div>
        <div>
          <Poll question={satisfactionQuestion} answers={satisfactionAnswers} onVote={this.handleVote} />
        </div>
        <div>
          <Poll question={qualityQuestion} answers={qualityAnswers} onVote={this.handleVote} />
        </div>
        <div>
          <Poll question={rebuyQuestion} answers={rebuyAnswers} onVote={this.handleVote} />
        </div>
      </div>
    );
  }
}


export default Goods;