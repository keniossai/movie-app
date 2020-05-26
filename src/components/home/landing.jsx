import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../layouts/spinner'
import SearchForm from '../home/search-form'
import MoviesContainer from './movies-container'


export class Landing extends Component {
    render() {
        const { loading } = this.props
        return (
            <div className='container'>
                <SearchForm />
                { loading ? <Spinner /> : <MoviesContainer /> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading
})
export default connect(mapStateToProps)(Landing)
