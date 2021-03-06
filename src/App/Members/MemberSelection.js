import { connect } from 'react-redux';
import { selectMember } from '../../actions';
import Members from './Members';
import { membersInRangeSelector } from './../../selectors';

const mapStateToProps = (state, props) => ({
  members: membersInRangeSelector(state, props.match.params)
});

const mapDispatchToProps = dispatch => ({
  selectMember: member => dispatch(selectMember(member))
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
