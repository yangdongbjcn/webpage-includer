<div class='row'>
	<div class='col-sm-12'>
		<div class='well'>
	      <p>气泡矩阵图：</p>
	      <p>1. 从EXCEL中直接拷贝数据进来。</p> 
	      <p>2. IE中想要改变颜色，请先按F5刷新，再选定背景色，再点击“气泡矩阵图”按钮。</p> 
	      <p>3. 火狐中可以右键图片，保存到本地。IE中请截屏。  </p> 
	    </div><!--/well-->
	</div>
</div>

<div class='row yd_layout_margin_top_s'>
	<div class='col-sm-2'>
	</div>
	<div class='col-sm-10'>	
	<input id='p_keys' class='form-control'></input>
	</div>
</div> <!-- end row -->

<div class='row yd_layout_margin_top_s'>	
	<div class='col-sm-2'>
	<textarea id='p_index' class='form-control' rows='15'></textarea>
	</div>
	<div class='col-sm-10'>
	<textarea id='p_rows' class='form-control' rows='15'></textarea>
	</div>
</div> <!-- end row -->

<div class='row yd_layout_margin_top_s'>

	<div class='col-sm-6'>
		<?php
		include('param_size.php');
		?>
	</div> <!-- end col-md -->

	<div class='col-sm-6'>
		<?php
		include('param_font.php');
		?>
	</div> <!-- end col-md -->

</div> <!-- end row -->

<div class='row'>	 
	<a class='btn btn-success yd_layout_center yd_layout_width_xs' id='submit'>
	确定
	</a>
</div> <!-- end row -->

