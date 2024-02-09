<?php
/**
 * Plugin Name:       Factbox
 * Description:       Factbox block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.10.1
 * Author:            Audun
 * License:           GPL2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       factbox
 * Domain path: /languages
 * @package           attac
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function factbox_factbox_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'factbox_factbox_block_init' );
