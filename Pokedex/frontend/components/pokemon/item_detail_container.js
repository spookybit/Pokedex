import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (ownProps) => ({
  itemDetail: ownProps.match.params.itemId
});


export default connect(
  mapStateToProps
)(ItemDetail);
