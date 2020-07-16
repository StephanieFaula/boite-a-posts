import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const formConfig = {
    form : "createPostForm",
    fields : ['title', 'content', 'author'],
    validate : validate
}


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className={`form-group`}>
        <label>{label}</label>
        <div>
            <input {...input} type={type} className={`form-control ${touched && error ? 'is-invalid' : ''} ${!error ? 'is-valid' : ''}`} />
            {touched &&
            ((error && <div>{error}</div>) )}
        </div>
    </div>
  )


class PostForm extends Component {
    render() {
        const {fields, handleSubmit, errors} = this.props;
        console.log(errors);

        return (
            <div>
                <h1>Nouveau post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
 
                        <Field name="title" component={renderField} label="Titre"  type="text" {...fields.title} />

                   
                        <Field name="content" component={renderField} label="Description" type="textarea" {...fields.content} />
                        
                 
                    
                        <Field name="author"  component={renderField} label="Auteur" type="text" {...fields.author} />
                        
              
                    <Link to="/" className="button_space"><button className="btn btn-danger">Retour</button></Link>
                    <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Créer</button>
                </form>
            </div>
        );
    }

    createPost(post){
        this.props.createPost(post);
        this.props.history.push("/");
    }
}

function validate(value) {
    const errors = {};
    
    if(!value.title){
        errors.title = "Veuillez renseigner un titre"
    }
    if(!value.content){
        errors.content = "Veuillez renseigner une description"
    }
    if(!value.author){
        errors.author = "Veuillez renseigner l'auteur"
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPost}, dispatch)
})

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));