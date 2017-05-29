<template lang="html">
	<header>
		<b-navbar toggleable type="inverse" variant="inverse">

			<b-nav-toggle target="nav_collapse"></b-nav-toggle>

			<b-link class="navbar-brand" to="#">
				<span>Challenge Eteg</span>
			</b-link>

			<b-collapse is-nav id="nav_collapse">

				<b-nav is-nav-bar>
					<b-nav-item>Home</b-nav-item>
					<b-nav-item>Consult</b-nav-item>
					<b-nav-item>Register</b-nav-item>
				</b-nav>

				<b-nav is-nav-bar class="ml-auto">
					<b-nav-item-dropdown right>
						<template slot="text">
							<strong>Bruno Meireles</strong>
						</template>

						<b-dropdown-item to="#">Profile</b-dropdown-item>
						<b-dropdown-item to="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-nav>
			</b-collapse>
		</b-navbar>
	</header>
</template>

<script>
	export default {
		
	}
</script>