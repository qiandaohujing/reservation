<template>
	<div id="seatRes">
		<vheader></vheader>
		<div class="maincontain">
			<div class="item" v-for="(item, index) in seatList" :key="index" @click="seatReservation(item)">
				<div class="mask" v-if="item.status"></div>
				<img src="../../assets/images/seat.png">
			</div>
		</div>
		<vfooter></vfooter>

		<el-dialog title="Warning" :visible.sync="dialogVisible" width="30%" center>
			<div class="bodyMessage">
				<span>该座位已被预约</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="座位信息" :visible.sync="centerDialogVisible" width="30%" center>
			<div class="seatMessage">
				<div>二楼自习区</div>
				<div>8号自习座位</div>
				<br>
				<span>时间：</span>
				<br>
				<span>{{getTime()}}--{{getTimeLater()}}</span>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import vheader from "../common/header";
	import vfooter from "../common/footer";
	import moment from "moment";
	export default {
		components: { vheader, vfooter },
		data() {
			return {
				dialogVisible: false,
				centerDialogVisible: false,
				seatList: [
					{
						status: 1
					},
					{
						status: 1
					},
					{
						status: 1
					},
					{
						status: 0
					},
					{
						status: 0
					},
					{
						status: 0
					}
				]
			};
		},
		methods: {
			handleClose() {
				setTimeout(() => {
					this.dialogVisible = false;
				}, 100);
			},
			seatReservation(item) {
				console.log("date:", moment(new Date()).format("HH:mm:ss"));
				if (item.status) {
					this.dialogVisible = true;
				} else {
					this.centerDialogVisible = true;
				}
			},
			getTime() {
				return moment().format("YYYY年M月D日 HH:mm:ss");
			},
			getTimeLater() {
				return moment()
					.add(4, "h")
					.format("HH:mm:ss");
			}
		}
	};
</script>

<style scoped>
	#seatRes {
		width: 100%;
		height: 100%;
		/* background-color: #cccccc; */
	}
	.maincontain {
		max-width: 1100px;
		height: calc(100% - 144px);
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.mask {
		width: 220px;
		height: 224px;
		background-color: rgba(255, 0, 0, 0.411);
		border-radius: 15px;
		position: absolute;
		z-index: 100;
	}
	.item {
		margin: 10px 50px;
		border-radius: 15px;
		overflow: hidden;
	}
	.item:hover {
		cursor: pointer;
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
	}
	.bodyMessage {
		width: 100%;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
		color: #ff3300;
	}
	.seatMessage {
		width: 100%;
		text-align: center;
		font-size: 16px;
	}
	.seatMessage span {
		margin: 12px;
	}
</style>
