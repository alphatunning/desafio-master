<template lang="html">
	<section>
		<article>
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<b-breadcrumb class="my-2" :items="items"/>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<b-card class="mb-3" variant="info">Consult supplier list</b-card>

						<div class="justify-content-centermy-1 row">

							<b-form-fieldset horizontal label="Rows per page" class="col-6" :label-size="6">
								<b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
								</b-form-select>
							</b-form-fieldset>

							<b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
								<b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
							</b-form-fieldset>
						</div>

						<b-table striped hover :items="dataTableItems" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
							<template slot="chave" scope="item">
								{{item.value}}
							</template>
							<template slot="listaFornecedorContrato" scope="item">
								{{item.value.nomeFornecedor}}
							</template>
						</b-table>

						<div class="justify-content-center row my-1">
							<b-pagination size="md" :total-rows="this.dataTableItems.length" :per-page="perPage" v-model="currentPage" />
						</div>
					</div>
				</div>
			</div>	
		</article>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				dataTableItems: [],
				fields: {
					nomeFornecedor: {
						label: 'Supplier name',
						sortable: true
					},
				},
				currentPage: 1,
				perPage: 10,
				filter: null,

				items: [{
					text: 'Home',
					link: '#',
				}, {
					text: 'Consult',
					link: '#',
				}, {
					text: 'Consult supplier list',
					active: true
				}]
			}
		},
		mounted () {
			this.$http.get('http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/fornecedores/A?formato=json').then(response => {
				this.dataTableItems = response.data.list;
				console.log("sucesso",response.data.list);
			},(response) => {
				console.log('erro',response)
			});
		}
	}
</script>