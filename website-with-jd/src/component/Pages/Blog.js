import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link as RouterLink} from 'react-router-dom'
import Header from '../Common/Header'
import image from '../assets/img/about.png'
import * as SiteActions from '../../store/actions/siteActions'
import BlogItem from '../Common/BlogItem'

class Blog extends Component {
    componentDidMount (){
        this.props.getPosts(0)
        this.props.getPostsCount()
    }

    render () {
        return (
            <div>
                <Header 
                    title="Blog"
                    subtitle="Read all of our story"
                    buttonText="Tell Me More"
                    showButton={false}
                    image={image}
                />
                <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        {this.props.site.posts ? 
                        this.props.site.posts.length > 0 ?
                        this.props.site.posts.map((post, i) => {
                            return (
                                <BlogItem 
                                    post={post}
                                    key={i}
                                />
                            )
                        })
                    : null   
                    : null}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                {this.props.site.postCount > this.props.site.posts.length ? 
                                    <button className="btn btn-dark" onClick={e => {
                                        this.props.getPosts(this.props.site.posts.length)
                                    }}>Load More</button>
                                :null}
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({

    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip))
    },
    getPostsCount: () => {
        dispatch(SiteActions.getPostCount())
    }
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog))

