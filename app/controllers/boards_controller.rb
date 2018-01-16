class BoardsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    @boards = Board.all
  end
  def show
    @board = Board.find(params[:id])
    if user_signed_in?
      @like = Like.where(user_id: current_user.id, board: @board.id)
    else
      @like = []
    end
  end

  def new

  end

  def create
    board = Board.create(
      title: params[:title],
      contents: params[:contents],
      user_id: current_user.id
    )
    redirect_to "/boards/#{board.id}"
  end
  def edit
    @board = Board.find(params[:id])
    #params[:id] => 숫자만 넘어옴
  end
  def update
    @board = Board.find(params[:id])
    @board.update(
      title: params[:title],
      contents: params[:contents]
    )
    redirect_to "/boards/#{@board.id}"
    # locahost:3000/boards/1
    # locahost:3000/boards/2
    # locahost:3000/boards/3
  end
  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    redirect_to "/"
  end

  def like_board
    #find는 하나만 리턴, where는 이 조건에 해당하는 모든 케이스를 반환
    user_like = Like.where(user_id: current_user.id, board_id: params[:id])
    if user_like.count > 0
      user_like.first.destroy
    else
      Like.create( user_id: current_user.id, board_id: params[:id])
    end
    @like = Board.find(params[:id]).likes.count
  end

  def create_comment
    @comment = Comment.create(
      user_id: current_user.id,
      board_id: params[:id],
      contents: params[:contents]
    )
    puts params[:contents]
    puts "서버로 요청이 왓구만유"

  end

  def delete_comment
    Comment.find(params[:id]).destroy()
    redirect_to :back
  end
end
