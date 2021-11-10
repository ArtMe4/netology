import './components/Store/css/index.css';
import PropTypes from 'prop-types';
import StoreModel from "./models/StoreModel";
import React from 'react';

function App() {

    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    class ShopItemClass extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { item } = this.props;
            return (
                <div className="main-content">
                    <h2>{item.brand}</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div className="description">
                        {item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile">
                        <div className="highlight-overlay"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{item.currency}{item.price}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            );
        }
    }

    function ShopItemFunc({item}) {
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{item.currency}{item.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <div className="background-element">

                </div>
                <div className="highlight-window">
                    <div className='highlight-overlay'>

                    </div>
                </div>
                <div className="window">
                  <ShopItemFunc item={item} />
                </div>
            </div>
            <div className="container">
                <div className="background-element">
                </div>
                <div className="highlight-window">
                    <div className='highlight-overlay'>

                    </div>
                </div>
                <div className="window">
                    <ShopItemClass item={item} />
                </div>
            </div>
        </>
    );
}

StoreModel.propTypes = {
    item: PropTypes.instanceOf(StoreModel).isRequired
}

export default App;
