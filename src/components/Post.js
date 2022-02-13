import React, { Component } from 'react';
import { getInfo } from '../helpers/url';
import { DevText, DisGrid, ImgCard, Item1, Item2, NameText, Point, PtMted } from '../styles/StyledComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {handleChange} from '../App'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          loading: true,
        };
      }
    
    
    componentDidMount() {
        getInfo()
          .then((res) => {
            this.setState({
              posts: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }
    
      renderPosts = () => {
        const { posts } = this.state;
    
        return posts.map(post => {
            const { id, image, name, dev, day, time, site, others} = post;
        
        return (
            
            <div>


                {<DisGrid key={id}>
                    <div>
                        <ImgCard className='imgCard' src={image} />
                    </div>
                    <Item1>
                        <div>
                            <NameText>{name}</NameText>
                            <DevText>{dev}</DevText>
                            <PtMted>{day}</PtMted><Point>.</Point><PtMted>{time}</PtMted><Point>.</Point><PtMted>{site}</PtMted>
                        </div>
                    </Item1>
                    <Item2>
                        {others.map((other, index) => {
                            return (
                                <div key={index} className='prueba'>{other}</div>
                            );
                        })}
                    </Item2>
                </DisGrid>}
            </div>
        );
    }
    )
}
}

export default Posts;
