import {  useSelector } from 'react-redux'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from '../components/Modal'
import ShowForm from '../components/ShowForm';
import DetailsCard from '../components/DetailsCard';
import Alert from '../components/Alert';

function WebsiteLayout(props) {

  const { isOpen, modalType } = useSelector((store) => store.modal)
  const {
    alertIsOpen } = useSelector((store) => store.alert)
  const showModal = () => {
    let InnerModal
    switch (modalType) {
      case 'card':
        InnerModal = DetailsCard
        break;
      case 'signIn':
        InnerModal = ShowForm
        break;
      case 'profile':
        InnerModal = () => (<h1>Profile options</h1>)
        break;
      default:
        InnerModal = () => (<h1>no content</h1>)
        break;
    }
    return  (<Modal><InnerModal/></Modal>)
  }
  
  return (
    <>
      <Header />
      {isOpen && showModal()}
      {alertIsOpen? <Alert />:null}
      {props.children}
      <Footer />
    </>
  )
}
export default WebsiteLayout