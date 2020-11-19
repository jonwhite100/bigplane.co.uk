<?php
/**
 * User API: WP_Role class
 *
 * @package WordPress
 * @subpackage Users
 * @since 4.4.0
 */

/**
 * Core class used to extend the user roles API.
 *
 * @since 2.0.0
 */
class WP_Role {
	/**
	 * Role name.
	 *
	 * @since 2.0.0
	 * @var string
	 */
	public $name;

	/**
	 * List of capabilities the role contains.
	 *
	 * @since 2.0.0
<<<<<<< HEAD
	 * @var bool[] Array of key/value pairs where keys represent a capability name and boolean values
	 *             represent whether the role has that capability.
=======
	 * @var array
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	public $capabilities;

	/**
	 * Constructor - Set up object properties.
	 *
<<<<<<< HEAD
	 * The list of capabilities must have the key as the name of the capability
=======
	 * The list of capabilities, must have the key as the name of the capability
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 * and the value a boolean of whether it is granted to the role.
	 *
	 * @since 2.0.0
	 *
<<<<<<< HEAD
	 * @param string $role         Role name.
	 * @param bool[] $capabilities Array of key/value pairs where keys represent a capability name and boolean values
	 *                             represent whether the role has that capability.
=======
	 * @param string $role Role name.
	 * @param array $capabilities List of capabilities.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	public function __construct( $role, $capabilities ) {
		$this->name         = $role;
		$this->capabilities = $capabilities;
	}

	/**
	 * Assign role a capability.
	 *
	 * @since 2.0.0
	 *
<<<<<<< HEAD
	 * @param string $cap   Capability name.
	 * @param bool   $grant Whether role has capability privilege.
=======
	 * @param string $cap Capability name.
	 * @param bool $grant Whether role has capability privilege.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	public function add_cap( $cap, $grant = true ) {
		$this->capabilities[ $cap ] = $grant;
		wp_roles()->add_cap( $this->name, $cap, $grant );
	}

	/**
	 * Removes a capability from a role.
	 *
<<<<<<< HEAD
=======
	 * This is a container for WP_Roles::remove_cap() to remove the
	 * capability from the role. That is to say, that WP_Roles::remove_cap()
	 * implements the functionality, but it also makes sense to use this class,
	 * because you don't need to enter the role name.
	 *
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 * @since 2.0.0
	 *
	 * @param string $cap Capability name.
	 */
	public function remove_cap( $cap ) {
		unset( $this->capabilities[ $cap ] );
		wp_roles()->remove_cap( $this->name, $cap );
	}

	/**
	 * Determines whether the role has the given capability.
	 *
<<<<<<< HEAD
	 * @since 2.0.0
	 *
	 * @param string $cap Capability name.
	 * @return bool Whether the role has the given capability.
=======
	 * The capabilities is passed through the {@see 'role_has_cap'} filter.
	 * The first parameter for the hook is the list of capabilities the class
	 * has assigned. The second parameter is the capability name to look for.
	 * The third and final parameter for the hook is the role name.
	 *
	 * @since 2.0.0
	 *
	 * @param string $cap Capability name.
	 * @return bool True if the role has the given capability. False otherwise.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	public function has_cap( $cap ) {
		/**
		 * Filters which capabilities a role has.
		 *
		 * @since 2.0.0
		 *
<<<<<<< HEAD
		 * @param bool[] $capabilities Array of key/value pairs where keys represent a capability name and boolean values
		 *                             represent whether the role has that capability.
=======
		 * @param bool[] $capabilities Associative array of capabilities for the role.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 * @param string $cap          Capability name.
		 * @param string $name         Role name.
		 */
		$capabilities = apply_filters( 'role_has_cap', $this->capabilities, $cap, $this->name );

		if ( ! empty( $capabilities[ $cap ] ) ) {
			return $capabilities[ $cap ];
		} else {
			return false;
		}
	}

}
