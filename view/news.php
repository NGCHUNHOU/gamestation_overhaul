<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 title-news" style="margin-top: 25px; margin-left: 20px; margin-right: 20px;">
            <h3>Latest News</h3>
        </div>
        <div class="col-12 mt-4 mb-3">
            <?php
            for ($i = 0; $i < count($this->ListTable['monday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none; min-height: 150px;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['monday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['monday'][$i]['imgNews_source']. " rel='preload' style='max-width:200px; max-height: 180px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['monday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['monday'][$i]['news_title']."</h5>
                        <p class='card-text'>".$this->ListTable['monday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['tuesday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['tuesday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['tuesday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['tuesday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['tuesday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['tuesday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['wednesday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['wednesday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['wednesday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['wednesday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['wednesday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['wednesday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['thursday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['thursday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['thursday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['thursday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['thursday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['thursday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['friday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['thursday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['friday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['friday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['friday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['friday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['saturday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['saturday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['saturday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['saturday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['saturday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['saturday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }

            for ($i = 0; $i < count($this->ListTable['sunday']); $i++) {
                echo
                    "<div class='card' style='background: inherit; border: none;'>
                <div class='card-main' style='display:flex; flex-direction: row-reverse;'>
                        <a class='card-link' href="."/gamestation/news/article/".$this->rewriteNewsTitleUrl($this->ListTable['sunday'][$i]['news_title'])."></a> 
                    <div class='img-wrapper' style='padding: 1.25rem'>
                        <img src=".$this->ListTable['sunday'][$i]['imgNews_source']." rel='preload' style='max-width:200px;' alt='image loading'>
                    </div>
                    <div class='card-body'>
                        <p class='font-weight-bold mb-2'>Article <span style='font-size: small;'>[".$this->ListTable['sunday'][$i]['date']."]</span></p>
                        <h5 class='card-title'>".$this->ListTable['sunday'][$i]['news_title']."</h5>
                        <a href='/article'></a> 
                        <p class='card-text'>".$this->ListTable['sunday'][$i]['description']."</p>
                    </div>
                </div>
                </div>";
            }
            // print "<pre style='color: #000;'>";
            // print_r($this->ListTable);
            // print "</pre>";

            // print "<pre style='color: #000;'>";
            // print_r($this->MonTitleURL);
            // print "</pre>";

            // print "<pre style='color: #000;'>";
            // print_r($this->TueTitleURL);
            // print "</pre>";
            ?>
        </div>
    </div>
</div>