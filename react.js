var App = React.createClass({
	getInitialState: function() {
		var component = this;
	  	var data = {};
	  	var selection = [];

		var setState = function() {
			component.setState({
				selection: selection,
				data: data
			})			
		}

	  	data.title = results.question;
	  	data.answers = (function(answers){
			var ret = [];
			for(var r in answers) {
				var answer = answers[r];
				answer.caption = parseInt(r) + 1;	
				answer.color = palette[r];
				ret.push(answer);
			}
			return ret;
		}) (results.answers)


	  	selection.toggle = function(item) {
			if (selection.indexOf(item) > -1) {
				selection.splice(selection.indexOf(item), 1);
			} else {
				selection.push(item);
			}
			setState();
	  	}

		data.results = (function(userTags){
			var ret = [];
			for(var r in userTags) {
				var result = userTags[r];
				result.team = {
					key: r.split(':')[1],
					name: r.split(':')[1]
				}
				result.total = result.answers.reduce(function(total, value){
					return total + value;
				})
				ret.push(result);
			}
			return ret;
		}) (results.userTags);

		fetch(getTeamsUrl)
			.then((response) => response.json())
			.then(function(json){
				for(var t in json.teams) {{
					var team = json.teams[t];
					var key = 'team-' + team._id;
					var findResult = (function(results, key){
						for(var r in results) {
							var result = results[r];
							if (result.team.key == key) return result;
						}
					})(data.results, key)
					if (findResult) {
						findResult.team = team;
					}					
				}}
				sortResults();
				setState();
			})

		var sortResults = function() {
			data.results.sort(function(a, b){
				//return a.team.name.localeCompare(b.team.name, 'en', {'sensitivity': 'base'})
				var a = a.team.name.toLowerCase(), b = b.team.name.toLowerCase();
				if (a < b) return -1;
				if (a > b) return +1;
				return 0;
			})
		}

		sortResults(data.results);

		data.total = data.answers.reduce(function(a, b){
			return {
				count: a.count + b.count
			};
		})
		return {
			selection: selection,
			data: data
		}
	},
	render: function() {

	    return (		
	      	<app>
	      		<AppHeader title={this.state.data.title} />
	      		<AnswersList answers={this.state.data.answers}/>
	      		<AppContent
	      			data={this.state.data}
	      			selection={this.state.selection} />
	      	</app>
	    );
	  }
});

var AppHeader = React.createClass({
	render: function() {
		return (		
			<header>"{this.props.title}"</header>
		);
	}
});


var AnswersList = React.createClass({
	render: function() {
		var list = this.props.answers.map(function(answer) {
			var style = {
				color: answer.color
			}
			return (
				<span>
					<span className="answer" style={style}>{answer.caption}</span>
					-"{answer.text}"
				</span>
			);
	    });
	    return (
			<div className="answers">
				{list}
			</div>
		);
	}
});

var AppContent = React.createClass({
	render: function() {
		var component = this;

		var graphicsList = function() {
			return component.props.selection.map(function(result){
				var rows = answers2rows(result.answers, component.props.data.answers);								
				var toggle = function() {
					component.props.selection.toggle(result);
				}
				return (
					<div className="graphic">
						<header onClick={toggle}>{result.team.name}</header>
						<ResultGraphic rows={rows} />
					</div>				
				);
			})
		}		
	    return (		
			<content>
				<div className="table">
					<TableData
						selection={this.props.selection}
						data={this.props.data} />
				</div>
				<div className="graphics">
					{graphicsList()}
				</div>
			</content>
	    );
	}
});

var ResultGraphic = React.createClass({
	componentDidMount: function(){
		var component = this;
		var e = ReactDOM.findDOMNode(component);

		if (e && component.props.rows && !e.drawn) {
			var canvas = new Raphael(e, '360', '240');
			pieChart.call(canvas, 180, 120, 60, component.props.rows, "#000")
			e.drawn = true;
		}

	},
	render: function() {
		return (			
			<content />
		);
	}
})

var TRResult = React.createClass({
	getInitialState: function() {
		var result = this.props.result;

		return {
			answers: this.props.answers,
			result: result
		}
	},
	render: function() {
		var component = this;
		var data = this.props.data;
		var result = this.props.result;
		var selection = this.props.selection;

		var resultClick = function() {
			selection.toggle(result);

			component.setState({
				answers: component.props.answers,
				result: result
			})				

		}

		var resultClass = function() {
			var classes = ['result'];
			if (selection.indexOf(result) > -1) {
				classes.push('selected');
			}
			return classes.join(' ');
		}

  		var tdResultAnswers = function(result, data) {
  			return (
  				result.answers.map(function(value){
	  				return (
						<td>{ decimal2percentage(value / result.total)}</td>
	  				);
  				})  				
  			);
  		}
		return (
			<tr className={resultClass()} onClick={resultClick}>
				<td></td>
				<td>{result.team.name}</td>
				{tdResultAnswers(result, this.state.answers)}
				<td>{result.total}</td>
			</tr>
		);
	}
})

var TableData = React.createClass({
	render: function() {
		var data = this.props.data;
		var selection = this.props.selection;

  		var theadAnswers = function() {
  			return data.answers.map(function(answer) {
				var style = {
					color: answer.color
				}
				return (
					<th>
						<span className="answer" style={style}>{answer.caption}</span>					
					</th>
				);
		    });
  		}
  		var tdResultAnswers = function(result, data) {
  			return (
  				result.answers.map(function(value){
	  				return (
						<td>{ decimal2percentage(value / result.total)}</td>
	  				);
  				})  				
  			);
  		}


  		var tbodyResults = function() {
	  		return data.results.map(function(result) {
				return (
					<TRResult result={result} data={data} selection={selection} />
				);
		    });
  		}

  		var tfootAnswers = function() {
  			return data.answers.map(function(answer) {
				return (
					<td>
						{answer.count}
					</td>
				);
	    	});
  		}
	    return (
			<table className="results">
				<thead>
					<tr>
						<th colSpan="2">Team</th>
						{theadAnswers()}
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{tbodyResults()}
				</tbody>
				<tfoot>
	    			<tr>
	    				<td colSpan="2">Todo</td>
	    				{tfootAnswers()}
	    				<td>{data.total.count}</td>
		    		</tr>    	
				</tfoot>
			</table>
		);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

