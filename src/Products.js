import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        height: 300,
      },
    media: {
        height: 140,
    },
});

class Products extends Component {


    constructor(props) {
        super(props)
        this.state = {
            cloudProducts: [],
            cloudProduct: []
        }
    }

    componentDidMount() {
        this.getCloudProductsFromApi()
    }

    getCloudProductsFromApi() {
        axios.get('http://localhost:8090/product')
            .then(cloudProducts => {
                this.setState({
                    cloudProducts: cloudProducts.data
                })
                console.log(cloudProducts)
            })
    }

    render() {

        let viewProducts = this.state.cloudProducts.map(item => {
            const { classes } = this.props;
            return (

                    
                    <Grid item xs={12} sm={6} md={3}>
                    
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

            )
        })

        return (
            <div>
                <Grid container>
                {viewProducts}

                </Grid>

                

            </div>
        )
    }
}
Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);