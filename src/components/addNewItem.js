// import React from 'react';
// import {Field, reduxForm} from 'redux-form';

// class addNewItem extends React.Component {
  
//   renderInput({input, label}) {
//     return(
//       <div className="field">
//         <label>{label}</label>
//         <input {...input}/>
//       </div>
//     );
//   }
  
//   onSubmit(formValues){
//     console.log(formValues)
//   }

//   render() {
//     return (
//       <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
//         <Field 
//           name="task" 
//           component={this.renderInput} 
//           label="Task"

//         />
//         <Field 
//           name="due by"
//           component={this.renderInput}
//           label="Due by"

//         />

//         <button className="ui primary button">Submit</button>
//       </form>
//     )
//   }
// };

// export default reduxForm({
//   form: 'addNewItem'
// })(addNewItem);

import React from 'react';
import {Field, reduxForm} from 'redux-form';

class AddNewItem extends React.Component {

  renderInput ({input, label}) {
    return (
      <div className="field">
        <label>
          <h4>{label}</h4>
        </label>
        <input {...input} />  
      </div>
    );
  }


  onSubmit (formInputs) {
    console.log(formInputs)
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="add task" label="Add task" component={this.renderInput} ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'AddNewItem'}
)(AddNewItem);