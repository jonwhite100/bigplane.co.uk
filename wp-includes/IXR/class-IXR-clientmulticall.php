<?php
/**
 * IXR_ClientMulticall
 *
 * @package IXR
 * @since 1.5.0
 */
class IXR_ClientMulticall extends IXR_Client
{
    var $calls = array();

	/**
	 * PHP5 constructor.
	 */
    function __construct( $server, $path = false, $port = 80 )
    {
        parent::IXR_Client($server, $path, $port);
        $this->useragent = 'The Incutio XML-RPC PHP Library (multicall client)';
    }

	/**
	 * PHP4 constructor.
	 */
	public function IXR_ClientMulticall( $server, $path = false, $port = 80 ) {
		self::__construct( $server, $path, $port );
	}

<<<<<<< HEAD
	/**
	 * @since 1.5.0
	 * @since 5.5.0 Formalized the existing `...$args` parameter by adding it
	 *              to the function signature.
	 */
    function addCall( ...$args )
    {
=======
    function addCall()
    {
        $args = func_get_args();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
        $methodName = array_shift($args);
        $struct = array(
            'methodName' => $methodName,
            'params' => $args
        );
        $this->calls[] = $struct;
    }

<<<<<<< HEAD
	/**
	 * @since 1.5.0
	 * @since 5.5.0 Formalized the existing `...$args` parameter by adding it
	 *              to the function signature.
	 *
	 * @return bool
	 */
    function query( ...$args )
=======
    function query()
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    {
        // Prepare multicall, then call the parent::query() method
        return parent::query('system.multicall', $this->calls);
    }
}
