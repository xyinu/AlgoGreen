import NavBar from '../../../components/navBar/navBar';
import './topForm.css';

const TopForm = ({
  isConnectedToPeraWallet,
  handleConnectWalletClick,
  handleDisconnectWalletClick
}) => {
  return (
    <body className="container">
      <NavBar />
      <p className="main-text">Create Your DAO</p>
      <button
        className="connect"
        onClick={isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick}
      >
        {isConnectedToPeraWallet ? 'Disconnect' : 'Connect to Pera Wallet'}
      </button>
    </body>
  );
};

export default TopForm;
