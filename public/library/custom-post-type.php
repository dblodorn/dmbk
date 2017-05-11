<?php

add_action( 'after_switch_theme', 'fs_flush_rewrite_rules' );

function fs_flush_rewrite_rules() {
	flush_rewrite_rules();
}

//-------------------------------------------------------------------
// CUSTOM POST TYPE: WEBSITE PROJECT
//-------------------------------------------------------------------

add_action( 'init', 'my_website_cpt' );

function my_website_cpt() {
$labels = array(
	'name'               => _x( 'websites', 'post type general name', 'your-plugin-textdomain' ),
	'singular_name'      => _x( 'website', 'post type singular name', 'your-plugin-textdomain' ),
	'menu_name'          => _x( 'websites', 'admin menu', 'your-plugin-textdomain' ),
	'name_admin_bar'     => _x( 'website', 'add new on admin bar', 'your-plugin-textdomain' ),
	'add_new'            => _x( 'Add New', 'website', 'your-plugin-textdomain' ),
	'add_new_item'       => __( 'Add New website', 'your-plugin-textdomain' ),
	'new_item'           => __( 'New website', 'your-plugin-textdomain' ),
	'edit_item'          => __( 'Edit website', 'your-plugin-textdomain' ),
	'view_item'          => __( 'View website', 'your-plugin-textdomain' ),
	'all_items'          => __( 'All websites', 'your-plugin-textdomain' ),
	'search_items'       => __( 'Search websites', 'your-plugin-textdomain' ),
	'parent_item_colon'  => __( 'Parent websites:', 'your-plugin-textdomain' ),
	'not_found'          => __( 'No websites found.', 'your-plugin-textdomain' ),
	'not_found_in_trash' => __( 'No websites found in Trash.', 'your-plugin-textdomain' )
);

$args = array(
	'labels'             => $labels,
	'description'        => __( 'Description.', 'your-plugin-textdomain' ),
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'website' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'show_in_rest'       => true,
	'rest_base'          => 'websites-api',
	'rest_controller_class' => 'WP_REST_Posts_Controller',
	'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);

register_post_type( 'website', $args );
}

//-------------------------------------------------------------------
// CUSTOM POST TYPE: DESIGN PROJECT
//-------------------------------------------------------------------

add_action( 'init', 'my_design_cpt' );

function my_design_cpt() {
$labels = array(
	'name'               => _x( 'designs', 'post type general name', 'your-plugin-textdomain' ),
	'singular_name'      => _x( 'design', 'post type singular name', 'your-plugin-textdomain' ),
	'menu_name'          => _x( 'designs', 'admin menu', 'your-plugin-textdomain' ),
	'name_admin_bar'     => _x( 'design', 'add new on admin bar', 'your-plugin-textdomain' ),
	'add_new'            => _x( 'Add New', 'design', 'your-plugin-textdomain' ),
	'add_new_item'       => __( 'Add New design', 'your-plugin-textdomain' ),
	'new_item'           => __( 'New design', 'your-plugin-textdomain' ),
	'edit_item'          => __( 'Edit design', 'your-plugin-textdomain' ),
	'view_item'          => __( 'View design', 'your-plugin-textdomain' ),
	'all_items'          => __( 'All designs', 'your-plugin-textdomain' ),
	'search_items'       => __( 'Search designs', 'your-plugin-textdomain' ),
	'parent_item_colon'  => __( 'Parent designs:', 'your-plugin-textdomain' ),
	'not_found'          => __( 'No designs found.', 'your-plugin-textdomain' ),
	'not_found_in_trash' => __( 'No designs found in Trash.', 'your-plugin-textdomain' )
);

$args = array(
	'labels'             => $labels,
	'description'        => __( 'Description.', 'your-plugin-textdomain' ),
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'design' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'show_in_rest'       => true,
	'rest_base'          => 'designs-api',
	'rest_controller_class' => 'WP_REST_Posts_Controller',
	'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);

register_post_type( 'design', $args );
}

//-------------------------------------------------------------------
// CUSTOM POST TYPE: ART PROJECT
//-------------------------------------------------------------------

add_action( 'init', 'my_art_cpt' );

function my_art_cpt() {
$labels = array(
	'name'               => _x( 'arts', 'post type general name', 'your-plugin-textdomain' ),
	'singular_name'      => _x( 'art', 'post type singular name', 'your-plugin-textdomain' ),
	'menu_name'          => _x( 'arts', 'admin menu', 'your-plugin-textdomain' ),
	'name_admin_bar'     => _x( 'art', 'add new on admin bar', 'your-plugin-textdomain' ),
	'add_new'            => _x( 'Add New', 'art', 'your-plugin-textdomain' ),
	'add_new_item'       => __( 'Add New art', 'your-plugin-textdomain' ),
	'new_item'           => __( 'New art', 'your-plugin-textdomain' ),
	'edit_item'          => __( 'Edit art', 'your-plugin-textdomain' ),
	'view_item'          => __( 'View art', 'your-plugin-textdomain' ),
	'all_items'          => __( 'All arts', 'your-plugin-textdomain' ),
	'search_items'       => __( 'Search arts', 'your-plugin-textdomain' ),
	'parent_item_colon'  => __( 'Parent arts:', 'your-plugin-textdomain' ),
	'not_found'          => __( 'No arts found.', 'your-plugin-textdomain' ),
	'not_found_in_trash' => __( 'No arts found in Trash.', 'your-plugin-textdomain' )
);

$args = array(
	'labels'             => $labels,
	'description'        => __( 'Description.', 'your-plugin-textdomain' ),
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'art' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'show_in_rest'       => true,
	'rest_base'          => 'arts-api',
	'rest_controller_class' => 'WP_REST_Posts_Controller',
	'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);

register_post_type( 'art', $args );
}

?>