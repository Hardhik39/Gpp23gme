class c_tile
    {
        constructor(l_x,l_y,l_text)
        {
            this.TILE_X=l_x;
            this.TILE_Y=l_y;
            this.TILE_SIZE=100;
            this.TILE_VALUE=l_text;
            this.TILE_COLOR="#ffbd0a";
            
        }
        m_draw_tile(l_context)
        {
            

            l_context.fillStyle=this.TILE_COLOR;
            l_context.fillRect(this.TILE_X,this.TILE_Y,this.TILE_SIZE,this.TILE_SIZE);
            
            l_context.strokeStyle="#0f0f0f";
            l_context.strokeRect(this.TILE_X,this.TILE_Y,this.TILE_SIZE,this.TILE_SIZE);
            
                   l_context.font="30px Arial";
					l_context.fillStyle="#000000"
					l_context.fillText(this.TILE_VALUE,this.TILE_X+40,this.TILE_Y+60);

					
                
            
        }
        
    }