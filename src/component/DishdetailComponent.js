import { Component } from "react";
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <div></div>
            );
        }

        return (
            <div className="col-12 col-md-3">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );

    }
    
    render(){
        const dish =this.props.dish;
        if (dish==null){
            return(<div></div>);
        }
        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);

        return(
            <div className='row'>
                {dishItem}
                {dishComments}
            </div>
        );
    }



}
export default DishDetail;