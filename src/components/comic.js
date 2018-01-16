import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getComics} from '../actions/comic'


class Comic extends Component {

  componentWillMount() {
    this.props.getComics();
  }

  render() {
    console.log('props: ' + JSON.stringify(this.props.comics));

    return (
      <div>
        <h2>Comics</h2>
        <ul>
        {this.props.comics.map(comic =>
          <li key={comic.id}>{comic.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comics: state.comics
})

const dispatchToProps = (dispatch) => ({
   getComics: () => dispatch(getComics())
})

export default connect(mapStateToProps, dispatchToProps)(Comic);
